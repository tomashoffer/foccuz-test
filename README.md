# Proyecto de Gestión de Libros
## Instalación

1. **Clonar el Repositorio**

   Clona este repositorio en tu máquina local usando el siguiente comando:
   
   git clone <URL_DEL_REPOSITORIO>

2. **Instalar Dependencias**

   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

   npm install

3. **Configurar Variables de Entorno**

   Crea un archivo `.env` en la raíz del proyecto y define la variable `API_URL` con la URL de la API externa:

   API_URL=https://gitlab.com/-/snippets/4789289/raw/main/data.json

## Ejecución del Proyecto

1. **Modo de Desarrollo**

   Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

   npm run start:dev
   
   Esto iniciará el servidor en `http://localhost:3000`.

2. **Modo de Producción**

   Para ejecutar el proyecto en modo de producción, primero compila el proyecto y luego ejecútalo:

   npm run build
   npm run start:prod

## Endpoints Disponibles

- **GET /books**: Obtener todos los libros.
- **GET /books/:isbn**: Obtener un libro por ISBN.
- **GET /books/author?search={nombre de autor}**: Buscar libros por nombre de autor.

## Documentación de la API (SWAGGER)

La documentación de la API está disponible en Swagger. Una vez que el servidor esté en ejecución, puedes acceder a la documentación en `http://localhost:3000/api`.

##
VIDEO EXPLICATIVO DEL PROYECTO
LINK 1: https://www.loom.com/share/e0e3449b654b4c1b96a6be5338577d1a?sid=6fd99409-c982-40a1-8ef6-3422274361a2


LINK 2: https://www.loom.com/share/639075ee3fdf48208d8d368a88198ba7?sid=5fae8947-3561-4514-a5c0-908e84ea5475