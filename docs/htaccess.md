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
<IfModule mod_expires.c>
ExpiresActive on
ExpiresByType text/css "access plus 14 days"
ExpiresByType text/javascript "access plus 14 days"
ExpiresByType application/x-javascript "access plus 14 days"
ExpiresByType image/jpg "access plus 14 days"
ExpiresByType image/jpeg "access plus 14 days"
ExpiresByType image/gif "access plus 14 days"
ExpiresByType image/png "access plus 14 days"
ExpiresByType image/svg+xml "access plus 1 month"
ExpiresByType video/mp4 "access plus 1 month"
ExpiresByType video/webm "access plus 1 month"
ExpiresByType application/x-font-woff "access plus 1 month"
</IfModule>

<IfModule mod_rewrite.c>
RewriteEngine On

# HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# www → sin www
RewriteCond %{HTTP_HOST} ^www\.esteticagalia\.es$ [NC]
RewriteRule ^(.*)$ https://esteticagalia.es/$1 [R=301,QSA,L]
</IfModule>

ErrorDocument 404 /404.html

<Files .htaccess>
Order allow,deny
Deny from all
</Files>
```
