La aplicación necesita una base de datos llamada "alumnos", la migración para esta base de datos está dentro del proyecto.
Al archivo .env debe ser adicionado el valor `API_KEY="th1s1sth3k3yf0rt3st"` que es el key que permite el acceso al api.
El servidor laravel debe estar activo para recibir solicitudes, esto se hace con `php artisan serve`
La ruta base de las solicitudes Http es `http://127.0.0.1:8000/api` puede variar dependiendo la configuración de laravel instalada en el dispositivo.
Las rutas para las solicitudes de la prueba son:
Post => `http://127.0.0.1:8000/api/crear-alumno`
Get => `http://127.0.0.1:8000/api/consultar-alumno/{idGrado}`
Las solicitudes por medio de Postman se deben hacer con formato `Application/Json`

Para visualizar el aplicativo front con Angular se debe:
1 - Tener el servidor laravel corriendo `php artisan serve`
2 - Lanzar el servidor de Angular `ng serve`

Se adjunta una copia de la base de datos de MySQL usada.

Thanks.
