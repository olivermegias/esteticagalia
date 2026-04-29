# .htaccess for /v2/

Place this file inside the /v2/ directory on the server (same folder as index.html from the Astro build).
Do not put this in the WordPress root.

## Recommended (static Astro)

```
# /v2/.htaccess
DirectoryIndex index.html
```

## Optional: SPA fallback (only if you need routes not prebuilt)

```
# /v2/.htaccess
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /v2/
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /v2/index.html [L]
</IfModule>
```
