FROM httpd:2.4
RUN mkdir /usr/local/apache2/htdocs/ui
COPY ./dist/k8uiworkshop /usr/local/apache2/htdocs/ui/
