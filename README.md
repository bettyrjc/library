## Instalación

🐋️ [Instalar docker ]('https://docs.docker.com/engine/install/')

🐋️ [Instalar docker compose]('https://docs.docker.com/compose/install/') .

### Ejecutar docker 🐋️

1. Crear la imagen de docker, la primera vez que vamos a ejecutar el proyecto o cuando agregamos un nuevo paquete al package.json debemos hacer un build.

```sh

docker-compose -f docker-compose.local.yml build

```

2. Luego que termine podemos levantar el proyecto con:

```sh

docker-compose -f docker-compose.local.yml up

```

3. Para bajar el proyecto:

```sh

docker-compose -f docker-compose.local.yml down

```

### Nota:

Hay dos formas de agregar una nueva dependencia, la primera es agregandola directo en el package.json de forma manual o ejecutando el siguiente comando:

```sh

docker-compose -f docker-compose.local.yml run --rm app npm install --save PAQUETE

```

Un ejemplo:

```sh

docker-compose -f docker-compose.local.yml run --rm app npm install --save node-sass

```

Para poder instalar de esta forma debes tener el proyecto corriendo con el 2do comando.
