FROM alpine:3.19

COPY ./conf/launch.sh /
COPY ./conf/ssl /etc/nginx/ssl
COPY ./conf/default.conf /etc/nginx/http.d/default.conf

RUN apk update && apk add --no-cache nginx \
    openssl && mkdir /www && chmod +x launch.sh && \ 
    ln -s /dev/stdout /var/log/nginx/access.log && \
    ln -s /dev/stderr /var/log/nginx/error.log && \
    rm -rf /var/cache/apk/*

EXPOSE 443/tcp 80/tcp

ENTRYPOINT [ "./launch.sh" ]