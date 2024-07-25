# Configuración minima
1. Instalar las dependencias del proyecto
~~~ bash
npm install
~~~
2. Mirar los esquemas de la base de datos
~~~ bash
npx prisma migrate dev --name init
~~~
2.1 Puedes usar el comando `npx prisma studio` usar la interfaz de usuario de prisma para insertar datos en la base de datos
~~~ bash
npx prisma studio
~~~
3. Lanzar el proyecto en modo de desarrollo
~~~ bash
npm run dev
~~~

