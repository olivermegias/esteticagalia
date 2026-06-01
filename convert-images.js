import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Rutas de origen y destino (las procesaremos in-place dentro de public/images)
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Extensiones que vamos a buscar y convertir
const EXTENSIONS_TO_CONVERT = ['.jpg', '.jpeg', '.png', '.png'];

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Si es una carpeta (como /cards), entramos recursivamente
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      
      if (EXTENSIONS_TO_CONVERT.includes(ext)) {
        // Forzamos el nombre de salida en minúsculas para evitar problemas de links
        const baseName = path.basename(file, path.extname(file)).toLowerCase();
        const outputFileName = `${baseName}.webp`;
        const outputPath = path.join(directory, outputFileName);

        try {
          console.log(`⏳ Procesando y optimizando: ${file}...`);
          
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Redimensiona si es una foto gigante de cámara
            .webp({ quality: 80 }) // Calidad óptima para WebP
            .toFile(outputPath);

          const oldSize = (stat.size / 1024 / 1024).toFixed(2);
          const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
          console.log(`✅ Convertido: ${outputFileName} (${oldSize}MB ➡️ ${newSize}MB)`);

        } catch (error) {
          console.error(`❌ Error al procesar ${file}:`, error);
        }
      }
    }
  }
}

console.log('🚀 Iniciando optimización masiva de imágenes a WebP...');
processDirectory(IMAGES_DIR)
  .then(() => console.log('\n🎉 ¡Proceso completado! Revisa tu carpeta public/images.'))
  .catch(err => console.error('Fallo general:', err));