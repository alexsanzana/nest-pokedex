<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest Cli Instalado
```
wind
npm i -g @nestjs/cli
```

4. levantar la base de datos 
```
docker-compose up -d
```

5. Clonar el el archivo ``` .env.template``` y renombrar la copia a  ```.env```

6. Llenar las variables de entorno definidas ``` .env ```

7. Ejecutar la aplicación en dev:
```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest
