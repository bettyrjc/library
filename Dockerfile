FROM node:12

# Configuración de la zona horaria dentro del contenedor.
ENV TZ=America/Caracas
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Actualiza las dependencias de linux e instala algunas libreias.
RUN apt-get update
RUN apt-get install -y \
  build-essential \
  libfontconfig \
  vim \
  && rm -rf /var/lib/apt/lists/*

# Crea directorio de trabajo
RUN mkdir -p /usr/src/app

# Le indica a docker cual será nuestro directorio principal o espacio de trabajo.
WORKDIR /usr/src/app

# Copiamos todos nuestros archivos dentro del contenedor.
COPY . .

# Instalamos dependencias globales 
RUN npm install -g nodemon

# Instalamos dependencias del proyecto
RUN npm install

# Exponemos el puerto que usa nuestro App
EXPOSE 3000

# Ejecutamos el comando para inicializar el proyecto.
CMD [ "npm", "run", "start" ]