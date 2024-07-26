# Configuración minima

1. Instalar las dependencias del proyecto

```bash
npm install
```

2. Mirar los esquemas de la base de datos

```bash
npx prisma migrate dev --name init
```

2.1 Puedes usar el comando `npx prisma studio` usar la interfaz de usuario de prisma para insertar datos en la base de datos

```bash
npx prisma studio
```

3. Lanzar el proyecto en modo de desarrollo

```bash
npm run dev
```

# Uso de las entidades

1. Usuarios: Puedes acceder a la ruta de usuarios para crear, ver, editar o eliminar los usuarios existentes en la base de datos, la ruta que puedes usar de manera local se vería de la siguiente forma:

http://localhost:3000/api/users

Los datos a ingresar en las pruebas los puedes agregar en formato json, de la siguiente forma:
{
"name":" ",
"lastname":" ",
"email":" ",
"phone":" ",
"password":" "
}

Dentro de las "" puedes agregar el valor que desees darle a cada propiedad del usuario que deseas crear.

2. Paises: Puedes acceder a la ruta de paises para crear, ver, editar o eliminar los platillos que serán mostrados en la página acompañando a cada platillo mostrado, la ruta que puedes usar de manera local se vería de la siguiente forma:

http://localhost:3000/api/countries

Los datos a ingresar en las pruebas los puedes agregar en formato json, de la siguiente forma:

{
"name":" "
}

En este caso solo se espera que ingreses el nombre del país. Dentro del espacio entre "" puedes agregar el valor que le daras a la propiedad del país que vas a crear

3. Tags: Puedes acceder a la ruta de tags que acompañaran a los platillos para crear, ver, editar o eliminar los tags en la página, la ruta que puedes usar de manera local se vería de la siguiente forma:

http://localhost:3000/api/tags

Los datos a ingresar en las pruebas los puedes agregar en formato json, de la siguiente forma:

{
"name":" "
}

En este caso solo se espera que ingreses el nombre del tag, recuerda que estos son identificadores del tipo de comida que se va a presentar en la página. Dentro del espacio entre "" puedes agregar el valor que le daras a la propiedad del tag que vas a crear.
