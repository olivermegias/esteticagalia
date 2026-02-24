# Configuración del Formulario de Contacto

El formulario de contacto está configurado para usar **Web3Forms**, un servicio GRATUITO que permite enviar emails desde sitios estáticos sin necesidad de backend.

## 📋 Pasos para Activar el Envío de Emails

### 1. Obtener tu Access Key GRATIS

1. Ve a [https://web3forms.com](https://web3forms.com)
2. Haz clic en "Get Started" o "Create Access Key"
3. Ingresa el email donde quieres recibir los mensajes del formulario (ejemplo: `esteticagaliaguerrero@gmail.com`)
4. Recibirás un email con tu **Access Key** (algo como: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configurar el Access Key en tu Sitio

1. Abre el archivo `src/pages/contacto.astro`
2. En la **línea 268**, busca:
   ```javascript
   const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
   ```
3. Reemplaza `'YOUR_ACCESS_KEY_HERE'` con tu Access Key real:
   ```javascript
   const ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
   ```
4. Guarda el archivo
5. Reconstruye el sitio: `npm run build`

### 3. ¡Listo!

El formulario ahora enviará los mensajes directamente a tu email. 

## ✅ Características del Formulario

- ✉️ Los emails llegarán desde `noreply@web3forms.com`
- 📧 Se enviará una copia al email que configuraste
- 🔒 Incluye protección anti-spam integrada
- 📊 Panel de control para ver estadísticas en web3forms.com
- 💰 100% GRATIS (hasta 250 emails/mes, más que suficiente)

## 🧪 Probar el Formulario

1. Una vez configurada la Access Key, abre tu sitio
2. Ve a la página de Contacto
3. Rellena el formulario
4. Verás un mensaje de "Enviando..." mientras se procesa
5. Aparecerá un ✅ cuando se envíe correctamente
6. Revisa tu bandeja de entrada (puede tardar 1-2 minutos)

## 🔧 Alternativas (si prefieres otro servicio)

Si prefieres usar otro servicio de emails, aquí hay alternativas:

### Netlify Forms (si despliegas en Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- tus campos -->
</form>
```

### Formspree (alternativa similar a Web3Forms)
1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un formulario
3. Reemplaza la URL de envío en el script

### EmailJS (envío desde el navegador)
Requiere más configuración pero ofrece más personalización.

---

**Nota:** Web3Forms es la opción recomendada por su simplicidad, fiabilidad y porque es completamente gratuita sin cuotas mensuales.
