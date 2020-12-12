FROM httpd
COPY ./dist/kbcontacts/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND