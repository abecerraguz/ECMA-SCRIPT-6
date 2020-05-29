<section>

![WEBPACK AND BABEL](ES6-babel-webpack.png)

# INTRODUCCIÓN A ES6, WEBPACK y BABEL 
A estas alturas, probablemente hayas oído hablar de algo llamado ES6, o tal vez ES2015 y superior. Tal vez haya escuchado que es mejor o más moderno, pero que todavía no se puede usar en todos los navegadores. ¿Entonces cuál es el punto? ¿Cómo lo usa la gente? Hay mucha jerga y mucha tecnología detrás de esa jerga: transpilación, polyfill, lo que sea.

# APUNTES ES6+ WEBPACK , BABEL

## Antes de empezar Debemos tener instalado Node.js y NPM para saber si esta instalado se escribe en el terminal

- node --version
- npm --version


## 1. Creando el Package.json
Creamos una carpeta en nuestro pc,y abrimos la terminal para ejecutar:

~~~

  npm init -y

~~~

Esto creará nuestro archivo base `package.json` donde podremos configurar las dependencias que utilizará nuestro proyecto.

## 2. Instalar Webpack y Webpack CLI
Ejecutamos también en nuestra terminal:
~~~

  npm install webpack --save-dev
  npm install webpack-cli --save-dev

~~~
Lo cual instalará webpack y webpack cli

## 3. Crear index.html y index.js
Comenzaremos con una estructura básica de un proyecto web creando un `index.html` y dentro de la `carpeta src un index.js`:

~~~
 
   webpack-demo
    |- package.json
    |- index.html
  + |- /src
      |- index.js

~~~

index.html

~~~

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack</title>
  </head>
  <body>
    <h1>Iniciando nuestro proyecto</h1>
  </body>
  </html>

~~~

src/index.js

~~~

  const saludo = 'Hola mundo con webpack';
  console.log(saludo);

~~~

## 4. Ejecuta
Comenzaremos con una estructura básica de un proyecto web creando un `index.html` y dentro de la `carpeta src un index.js`:

~~~

  npx webpack

~~~

Y ahora tendrás un archivo minificado con el código js en la carpeta /dist/main.js, por lo tanto podemos mover nuestro index.html a la carpeta /dist y llamar a tal archivo js.

~~~

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack</title>
  </head>
  <body>
    <h1>Curso de Webpack</h1>

    `<script src="main.js"></script>`
  </body>
  </html>

~~~

Ejecuta en el navegador y tendrías que ver la consola que configuramos!!

# FUNDAMENTOS DE WEBPACK
Veremos como personalizar nuestros archivos JS de salida.

## Configurar webpack.config.js
Para esto necesitamos crear un archivo de configuración (en el directorio raíz) el cual se llamará:

~~~

  webpack.config.js

~~~

y tendrá lo siguiente:

~~~

  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    }
  };

~~~

En el `output: {filename}` estamos definiendo la salida por lo tanto podríamos cambiar el nombre a nuestro gusto. Ahora ejecutamos para comprobar la salida:

~~~

  npx webpack --config webpack.config.js

~~~

## Configurar Script
Podemos configurar nuestros propios script en el archivo package.json:
Importante simpre ver la documentación de la fuente oroginal los comandos se van actualizando

[URL A WEBPACK SCRIPT](https://webpack.js.org/guides/getting-started/#basic-setup)

~~~

    "scripts": {
      "build": "webpack --mode=development",
      "produccion": "webpack --mode=production",
      "watch": "webpack --w --mode=development"
    }

~~~

El primer script define la compilación de nuestro proyecto js, el segundo nos sirve para pasar a producción y el tercero para poder mantener un observador de cambios, para activar en el terminal cualquiera de los tres comandos se debe ingresar los siguiente:

~~~

  npm run build
  npm run produccion
  npm run watch

~~~

# BABEL JS
Nos permite compilar a diferentes versiones nuestro código JS.

Documentación oficial
[URL A BABEL](https://babeljs.io/setup#installation), nos situamos en `Build systems` y seleccionamos `Webpack`

## 1. Instalar dependencias
Ejecutar en nuestro proyecto:

~~~

  npm install --save-dev babel-loader @babel/core

~~~

## 2. `webpack.config.js`
Agregar configuración al archivo webpack.config.js:

~~~
 
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'salida-compilada.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  };

~~~

## 3. `.babelrc`
Crear el archivo de configuración `.babelrc` pero antes ejecutar:

~~~

  npm install @babel/preset-env --save-dev

~~~

y dentro del archivo .babelrc agregamos:

~~~

  {
    "presets": ["@babel/preset-env"]
  }

~~~

Esto habilita las transformaciones para ES2015 +

#PASO A PASO

##1. Creamos un Package JSON
~~~

  npm init -y

~~~
##2. Se crea el archivo en la raiz packaje.json
~~~

 Este archivo contiene la configuración de nuestro proyecto.

~~~
##3. Creamos la estructura de nuestro proyecto
~~~

 Para esto creamos una carpete `src` en la raiz del proyecto, esta carpeta puede contener nuestro `index.html` o nuestra carpeta `app` que contendría todo el Javascript de nuestro proyecto, como por ejemplo `index.js` archivo que contendra todo nuestro Javascript moderno. Esta carpeta `src` no ira a producción. Sólo estara presente en desarollo.

~~~














</section>