### Frontend
- Angular: Framework de desarrollo de aplicaciones web desarrollado en TypeScript.
- Bootstrap: Framework de diseño web para la creación de interfaces de usuario.
- Chart.js: Librería de JavaScript para la creación de gráficos en tiempo real.
- Paginación: Implementada para la visualización de los productos en la interfaz de usuario.
- Subida de Imágenes: Funcionalidad para cargar imágenes de productos al sistema.

## Características
- Operaciones CRUD: Permite crear, leer, actualizar y eliminar productos,subir imagen de produco del inventario.
- El backend fue creado con JAVA 11 , Springboot + JPA.
- Datos : Se utiliza un import.sql que contiene las querys para la inserción en las tablas ,en el archivo propoerties se modifica la conexión a bd y la creacion-eliminacion automatica de las tablas.
- Seguridad: Implementación de JWT y OAuth2 para la autenticación y autorización de usuarios.
- Paginación: Facilita la navegación entre los productos del inventario.
- Gráficos en Tiempo Real: Utilización de Chart.js para visualizar datos estadísticos sobre el inventario.

## Patrón de Diseño
El proyecto sigue el patrón de diseño MVC (Modelo-Vista-Controlador) para una estructura clara y mantenible.

## Instalación y Uso
1. Clona este repositorio.
2. Configura la base de datos SQL Server y actualiza las credenciales en la configuración de Spring Boot.
3. Ejecuta el backend con Spring Boot.
4. Navega hasta la carpeta del frontend y ejecuta `npm install` para instalar las dependencias.
5. Inicia el servidor de desarrollo del frontend con `ng serve`.
6. Accede a la aplicación en tu navegador web.


## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).
