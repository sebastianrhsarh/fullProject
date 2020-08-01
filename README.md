# Enunciado de la prueba primera parte.

Se debe realizar la confección del frontend usaremos Angular y la API que nos provee jsonplaceholder. Está API posee 6 entidades siendo la de Usuarios la central, que envuelven parte del CRUD de al menos una entidad, y se debe trabajar en los siguientes casos:
  • Usuarios
  • Post
  • Comments
Se pide al menos listar, crear y eliminar comentarios de un post, y clasificar cada post con su respectivo comment.
Como instrucción general la aplicación debe tener estilos los cuales se puede incluir Bootstrap, NgZorro , Angular material, siendo estos opcionales pero debe incluir SCSS obligatoriamente con notación BEM. Debe haber uso correcto de BEM y la capacidad para separar el template en componentes más pequeños.
En el siguiente link puede documentarse acerca del uso de la API https://jsonplaceholder.typicode.com/.

Además implemente un flujo de CI/CD integrado desde el control de versiones hasta el despliegue. Para este fin, debe Dockerizar la aplicación y desplegarla en un servidor cloud como GCP, usando para este fin Docker-swarm o Kubernetes y debe ser posible acceder a ella desde una URL. En este contexto se debe:

1. Automatizar el flujo de construcción de la imagen Docker, frente a commits o lanzar un MR.
2. Se debe desplegar la aplicación conectándose al servidor remoto y desplegando la imagen que ha sido previamente guardada en un registro de contenedores como el de gitlab.

# Enunciado de la prueba segunda parte.

Ahora se debe desarrollar el backend que antes era utilizado solo a modo de consumo. Para esto de desarrollar los CRUD que les tocó implementar anteriormente. El backend que se fabrique deben estar conectado a una base de datos para la persistencia de los datos y las operaciones que realicen sobre estos.

# Instrucciones para levantar la aplicación.

##  Clonar la repositorio

- `git clone https://github.com/sebastianrhsarh/fullProject.git`

- `git pull`

## En el directorio ./

- `sudo docker-compose -f .docker/docker-compose.yml up -d`

- [Caso de bajar : `sudo docker-compose -f .docker/docker-compose.yml down` ]

## En el ./backend 

- `npm install`

- `npm run start:dev`

## En el ./frontend 

- `npm install`

- `npm start` o `ng serve`

- probar en localhost:4200

# Entrar al phpMyAdmin

- entrar a localhost:5000 

- user:root pass: admin

#### (Opcional pruebas de api en insomnia o postman es en localhost:3000).
