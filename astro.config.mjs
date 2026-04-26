// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

/** @type {import('vite').Plugin} */
const suppressAstroScriptsServeWarning = {
  name: 'suppress-astro-scripts-serve-warning',
  configResolved(config) {
    const originalWarn = config.logger.warn;

    config.logger.warn = (msg, options) => {
      if (
        typeof msg === 'string' &&
        msg.includes('[plugin:astro:scripts] context method emitFile() is not supported in serve mode')
      ) {
        return;
      }

      originalWarn(msg, options);
    };
  },
};

export default defineConfig({
  site: 'https://esteticagalia.es',
  integrations: [react()],
  vite: {
    plugins: [suppressAstroScriptsServeWarning],
  },
});

