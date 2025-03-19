#!/bin/sh

SSLDIR="/etc/nginx/ssl"

if [[ ! -f "$SSLDIR/ssl.key" || ! -f "$SSLDIR/ssl.crt" ]]; then

    openssl genrsa --out "$SSLDIR/ssl.key" 2048

    openssl req -batch -new -key "$SSLDIR/ssl.key" -out "$SSLDIR/ssl.csr"

    openssl x509 -req -days 3650 -in "$SSLDIR/ssl.csr" \
        -signkey "$SSLDIR/ssl.key" -out "$SSLDIR/ssl.crt"
    
    rm -f "$SSLDIR/ssl.csr"
fi

echo -e "#!/bin/sh\n\nexec nginx -g 'daemon off;'" > launch.sh

exec nginx -g 'daemon off;'