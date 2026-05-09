import { useState, useMemo, useEffect } from 'react';
import React from 'react';

interface Categoria {
  id: string;
  label: string;
}

interface Servicio {
  slug: string;
  data: {
    title: string;
    categoria: string;
    descripcion: string;
    duracion?: string;
    precio?: string;
    imagen?: string;
    imagenLista?: string;
  };
}

interface Props {
  categorias: Categoria[];
  servicios: Servicio[];
}

const BASE_URL = import.meta.env.BASE_URL || '/';

function withBase(path?: string) {
  if (!path) return '';
  if (/^(https?:|\/\/|data:|mailto:|tel:)/.test(path)) return path;
  return `${BASE_URL}${path.replace(/^\//, '')}`;
}

export default function ServiciosFilter({ categorias, servicios }: Props) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Leer parámetro de categoría de la URL al cargar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria');
    if (categoria && categorias.some(cat => cat.id === categoria)) {
      setActiveFilter(categoria);
      // Scroll suave a los filtros
      setTimeout(() => {
        document.querySelector('.filter-nav')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [categorias]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (activeFilter !== 'todos') {
      params.set('categoria', activeFilter);
    } else {
      params.delete('categoria');
    }

    const nextQuery = params.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}`;
    window.history.replaceState({}, '', nextUrl);
  }, [activeFilter]);

  // Filtrar servicios
  const filteredServicios = useMemo(() => {
    let filtered = servicios;

    // Filtrar por categoría
    if (activeFilter !== 'todos') {
      filtered = filtered.filter(s => s.data.categoria === activeFilter);
    }

    // Filtrar por búsqueda
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(s => 
        s.data.title.toLowerCase().includes(term) ||
        s.data.descripcion.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [servicios, activeFilter, searchTerm]);

  const categoryQuery = activeFilter !== 'todos'
    ? `?categoria=${encodeURIComponent(activeFilter)}`
    : '';

  return (
    <div className="servicios-filter-wrapper">
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <svg 
          className="search-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="Buscar tratamiento..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            className="clear-search"
            onClick={() => setSearchTerm('')}
            aria-label="Limpiar búsqueda"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* Filtros de categoría */}
      <nav className="filter-nav">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Contador de resultados */}
      <div className="results-count">
        {filteredServicios.length} {filteredServicios.length === 1 ? 'tratamiento' : 'tratamientos'}
        {searchTerm && ` para "${searchTerm}"`}
      </div>

      {/* Grid de servicios */}
      <div className="servicios-grid">
        {filteredServicios.length > 0 ? (
          filteredServicios.map((servicio, index) => {
            const imageSrc = servicio.data.imagenLista || servicio.data.imagen;

            return (
              <a
                key={servicio.slug}
                href={withBase(`/servicios/${servicio.slug}${categoryQuery}`)}
                className="servicio-card animate-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="servicio-image"
                  style={
                    imageSrc
                      ? { backgroundImage: `url(${withBase(imageSrc)})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                      : { background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }
                  }
                >
                {!servicio.data.imagen && (
                  <svg
                    className="servicio-icon"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                )}
              </div>

              <div className="servicio-content">
                <div className="servicio-header">
                  <span className="servicio-categoria">
                    {categorias.find((c) => c.id === servicio.data.categoria)?.label}
                  </span>
                  {servicio.data.duracion && (
                    <span className="servicio-duracion">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {servicio.data.duracion}
                    </span>
                  )}
                </div>

                <h3>{servicio.data.title}</h3>

                <p className="servicio-descripcion">{servicio.data.descripcion}</p>

                <div className="servicio-footer">
                  {servicio.data.precio && (
                    <span className="servicio-precio">
                      {servicio.slug === 'exosomas'
                        ? 'Consultar'
                        : servicio.slug === 'pestanas'
                        ? '30€ / 37€'
                        : servicio.data.precio}
                    </span>
                  )}
                  <span className="servicio-link">
                    Ver más
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No se encontraron tratamientos</h3>
            <p>
              {searchTerm 
                ? `No hay resultados para "${searchTerm}"` 
                : 'Prueba con otra categoría'}
            </p>
            {(searchTerm || activeFilter !== 'todos') && (
              <button 
                className="btn-reset"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('todos');
                }}
              >
                Ver todos los tratamientos
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
