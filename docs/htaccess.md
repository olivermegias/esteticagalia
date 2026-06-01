# .htaccess for root (/)

Place this file inside the web root on the server (same folder as index.html from the Astro build).

## Recommended (static Astro)

```
# /.htaccess
DirectoryIndex index.html
```

## Optional: SPA fallback (only if you need routes not prebuilt)

```
# /.htaccess
# Fuente única de verdad para el enrutado y caché de Estética GaliaBeauty

DirectoryIndex index.html

# ----------------------------------------------------------------------
# | Configuración de Caché del Navegador (Mod_Expires)                 |
# ----------------------------------------------------------------------
<IfModule mod_expires.c>
    ExpiresActive on
    
    # Archivos estáticos de la web (14 días de caché)
    ExpiresByType text/css "access plus 14 days"
    ExpiresByType text/javascript "access plus 14 days"
    ExpiresByType application/x-javascript "access plus 14 days"
    
    # 🌟 Optimización de Imágenes WebP (Tus nuevas imágenes optimizadas)
    ExpiresByType image/webp "access plus 14 days"
    
    # 🌟 Soporte para PNG (Mantiene en caché tu mini-logo.png de pestañas)
    ExpiresByType image/png "access plus 14 days"
    
    # Fallbacks por si se usan formatos tradicionales de forma puntual
    ExpiresByType image/jpg "access plus 14 days"
    ExpiresByType image/jpeg "access plus 14 days"
    ExpiresByType image/gif "access plus 14 days"
    ExpiresByType image/svg+xml "access plus 1 month"
    
    # Vídeos y Tipografías de sistema
    ExpiresByType video/mp4 "access plus 1 month"
    ExpiresByType video/webm "access plus 1 month"
    ExpiresByType application/x-font-woff "access plus 1 month"
</IfModule>

# ----------------------------------------------------------------------
# | Redirecciones y Reglas de Enrutado (Mod_Rewrite)                    |
# ----------------------------------------------------------------------
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Forzar tráfico seguro a través de HTTPS obligatorio
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Redirección canónica de www.esteticagalia.es → esteticagalia.es (Sin WWW)
    RewriteCond %{HTTP_HOST} ^www\.esteticagalia\.es$ [NC]
    RewriteRule ^(.*)$ https://esteticagalia.es/$1 [R=301,QSA,L]
</IfModule>

# ----------------------------------------------------------------------
# | Cabeceras Especiales de Archivos de Texto                          |
# ----------------------------------------------------------------------
# Fuerza a que llms.txt y robots.txt se sirvan estrictamente como texto plano
<FilesMatch "^(llms\.txt|robots\.txt)$">
    ForceType text/plain
</FilesMatch>

# ----------------------------------------------------------------------
# | Seguridad y Errores Personalizados                                 |
# ----------------------------------------------------------------------
# Manejo del error 404 a la página generada por Astro
ErrorDocument 404 /404.html

# Impedir que se pueda leer el archivo .htaccess desde el navegador
<Files .htaccess>
    Order allow,deny
    Deny from all
</Files>
```
