<h1 style="text-align: center;">🚀 Configuración minima</h1>

## 1. Instalar las dependencias del proyecto

```bash
npm install
```

## 2. Mirar los esquemas de la base de datos

```bash
npx prisma migrate dev --name init
```

__Nota:__ Puedes usar el comando `npx prisma studio` usar la interfaz de usuario de prisma para insertar datos en la base de datos

```bash
npx prisma studio
```

## 3. Lanzar el proyecto en modo de desarrollo

```bash
npm run dev
```
---

<h1 style="text-align: center;">📝 USO DE LAS ENTIDADES</h1>

## USERS


### POST: Crear un nuevo usuario

URL que debes usar de manera local: 

```http
http://localhost:3000/api/users
```

Data que iría en el body del request:
```json
{
  "name":"",
  "lastname":"",
  "email":"",
  "phone":"",
  "password":""
}
```

### GET: Ver todos los usuarios
Este método devuelve todos los usuarios existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/users
```

### GET: Ver un usuario
Este método devuelve un usuario en especifico, debes pasar el id del usuario como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/users/id
```

### PUT: Editar un usuario
Este método edita un usuario en especifico, debes pasar el id del usuario como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/users/id
```

Data que iría en el body del request:

Nota: No es necesario ingresar todos los datos del usuario, solo los que desees editar
```json
{
  "name":"",
  "lastname":"",
  "email":"",
  "phone":"",
  "password":""
}
```

### DELETE: Eliminar un usuario
Este método elimina un usuario en especifico, debes pasar el id del usuario como parámetro en la url

```http
http://localhost:3000/api/users/id
```

## PAISES

### GET: Ver todos los paises
Este método devuelve todos los paises existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/countries
```

### GET: Ver un pais
Este método devuelve un pais en especifico, debes pasar el id del pais como parámetro en la url

```http
http://localhost:3000/api/countries/id
```

Data que iría en el body del request:
Nota: No es necesario ingresar todos los datos del pais, solo los que desees editar
```json
{
  "name":""
}
```

### POST: Crear un nuevo pais

Data que iría en el body del request:
```json
{
  "name":""
}
```

### PUT: Editar un pais
Este método edita un pais en especifico, debes pasar el id del pais como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/countries/id
```

Data que iría en el body del request para editar el nombre del pais:
```json
{
  "name":""
}
```

### DELETE: Eliminar un pais
Este método elimina un pais en especifico, debes pasar el id del pais como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/countries/id
```

## TAGS

### GET: Ver todos los tags
Este método devuelve todos los tags existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/tags
```

### GET: Ver un tag
Este método devuelve un tag en especifico, debes pasar el id del tag como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/tags/id
```

### POST: Crear un nuevo tag

URL que debes usar de manera local: 

```http
http://localhost:3000/api/tags
```

Data que iría en el body del request:
```json
{
  "name":""
}
```

### PUT: Editar un tag
Este método edita un tag en especifico, debes pasar el id del tag como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/tags/id
```

Data que iría en el body del request para editar el nombre del tag:
```json
{
  "name":""
}
```

### DELETE: Eliminar un tag
Este método elimina un tag en especifico, debes pasar el id del tag como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/tags/id
```

## INGREDIENTES

### GET: Ver todos los ingredientes
Este método devuelve todos los ingredientes existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/ingredients
```

### GET: Ver un ingrediente
Este método devuelve un ingrediente en especifico, debes pasar el id del ingrediente como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/ingredients/id
```

### POST: Crear un nuevo ingrediente

URL que debes usar de manera local: 

```http
http://localhost:3000/api/ingredients
```

Data que iría en el body del request:
```json
{
  "name":""
}
```

### PUT: Editar un ingrediente
Este método edita un ingrediente en especifico, debes pasar el id del ingrediente como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/ingredients/id
```

Data que iría en el body del request para editar el nombre del ingrediente:
```json
{
  "name":""
}
```

### DELETE: Eliminar un ingrediente
Este método elimina un ingrediente en especifico, debes pasar el id del ingrediente como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/ingredients/id
```

## COMIDAS

### GET: Ver todos las comidas
Este método devuelve todas las comidas existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/food
```

### GET: Ver una comida
Este método devuelve una comida en especifico, debes pasar el id de la comida como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/food/id
```

### POST: Crear una nueva comida

URL que debes usar de manera local: 

```http
http://localhost:3000/api/food
```

Data que iría en el body del request:
```json
{
    "name": "Hamburguesa",
    "price": 10.99,
    "description": "Deliciosa hamburguesa con queso y tocino",
    "image": "",
    "country": {
      "connect": {
        "id": "cuid_of_country"
      }
    },
    "ingredients": {
      "connect": [
        { "id": "cuid_of_ingredient1" },
        { "id": "cuid_of_ingredient2" },
        { "id": "cuid_of_ingredient3" }
      ]
    },
    "tags": {
      "connect": [
        { "id": "cuid_of_tag1" },
        { "id": "cuid_of_tag2" },
        { "id": "cuid_of_tag3" }
      ]
    }
  }
```

### PUT: Editar una comida
Este método edita una comida en especifico, debes pasar el id de la comida como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/food/id
```

Data que iría en el body del request para editar el nombre de la comida:
Nota: No es necesario ingresar todos los datos de la comida, solo los que desees editar
```json
{
    "name": "Hamburguesa",
    "price": 10.99,
    "description": "Deliciosa hamburguesa doble con queso y tocino",
    "image": "",
    "country": {
      "connect": {
        "id": "cuid_of_country"
      }
    },
    "ingredients": {
      "connect": [
        { "id": "cuid_of_ingredient1" },
        { "id": "cuid_of_ingredient2" },
        { "id": "cuid_of_ingredient3" }
      ]
    },
    "tags": {
      "connect": [
        { "id": "cuid_of_tag1" },
        { "id": "cuid_of_tag2" },
        { "id": "cuid_of_tag3" }
      ]
    }
  }
```

### DELETE: Eliminar una comida
Este método elimina una comida en especifico, debes pasar el id de la comida como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/food/id
```

## RESERVAS

### GET: Ver todos las reservas
Este método devuelve todas las reservas existentes en la base de datos, no necesitas ingresar ningún dato en el body del request

```http           
http://localhost:3000/api/reservations
```

### GET: Ver una reserva
Este método devuelve una reserva en especifico, debes pasar el id de la reserva como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/reservations/id
```

### POST: Crear una nueva reserva

URL que debes usar de manera local: 

```http
http://localhost:3000/api/reservations
```

Data que iría en el body del request:
```json
{
    "user": {
      "connect": {
        "id": "cuid_of_user"
      }
    },
    "date": "2023-05-01T00:00:00.000Z",
}
```

### PUT: Editar una reserva
Este método edita una reserva en especifico, debes pasar el id de la reserva como parámetro en la url y debes ingresar los datos que deseas editar en el body del request

URL que debes usar de manera local:
```http
http://localhost:3000/api/reservations/id
```

Data que iría en el body del request para editar el nombre de la reserva:
Nota: No es necesario ingresar todos los datos de la reserva, solo los que desees editar
```json
{
    "user": {
      "connect": {
        "id": "cuid_of_user"
      }
    },
    "date": "2023-05-01T00:00:00.000Z",
}
```

### DELETE: Eliminar una reserva
Este método elimina una reserva en especifico, debes pasar el id de la reserva como parámetro en la url, no necesitas ingresar ningún dato en el body del request

```http
http://localhost:3000/api/reservations/id
```