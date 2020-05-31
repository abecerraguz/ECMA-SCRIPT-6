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

# PASO A PASO

## 1. Creamos un Package JSON
~~~

  npm init -y

~~~
## 2. Se crea el archivo en la raiz packaje.json
~~~

 Este archivo contiene la configuración de nuestro proyecto.

~~~
## 3. Creamos la estructura de nuestro proyecto
~~~

 Para esto creamos una carpete `src` en la raiz del proyecto, esta carpeta puede contener nuestro `index.html` o nuestra carpeta `app` que contendría todo el Javascript de nuestro proyecto, como por ejemplo `index.js` archivo que contendra todo nuestro Javascript moderno. Esta carpeta `src` no ira a producción. Sólo estara presente en desarollo.

~~~



# Creamos un Package JASON

~~~
  npm init -y
~~~

1. Se crea el archivo en la raiz `packaje.json`, este archivo contiene la configuración de nuestro proyecto.

2. Luego creamos la estructura de nuestro proyecto, para esto creamos una carpete `src` en la raiz del proyecto, esta carpeta puede contener nuestro `index.html` o nuestra carpeta `app` que contendría todo el javascript de nuestro proyecto, como por ejemplo `index.js` archivo que contendra todo nuestro javascript moderno. Esta carpeta `src` no ira a Producción. Sólo estara presente en Desarollo.

3. Ahora nos vamos a enfocar en el archivo `package.json`, en este archivo vamos a listar todo lo que necesitamos, para esto debemos realizar instalación a traves de lotes de consola.

4. Para poder instalar los paquetes de `Node Package Module` se realiza de la siguiente forma:

~~~
   npm install o resumido npm i.
~~~

5. Paquetes que requerimos:

*	Webpack es un empaquetador de Modulo, podemos tener un servidor de desarro, te permite tomar los archivos del Front End como HTML, CSS, SASS, JAVASCRIPT, Imagenes y llevarlas de producción a Desarrollo. [IR A WEB PACK](https://webpack.js.org/)

*	Entonces instalaremos Webpack y otras dependencias como webpack-cli con eso estamos listos con Webpack, pero necesitamos Babel, para instalar babel debemos ir [IR A LA URL DE BABEL](https://babeljs.io) , luego iremos a la sección de Docs y luego iremos a la opción de "User Guide", en esta opción debemos instalar , `@babel/core`, `@babel/cli`, `@babel/preset-env`, el primero es en si babel, el segundo `@babel/cli` `npm i webpack webpack-cli` es la forma que tenemos para interactuar con babel desde la terminal, el ultimo es la forma que nos permite escribir con los ultimos estandares de Javascript o sea podemos trabajar con importar clases funciones de flecha etc. Ojo como estamos instalando Webpack.

*	Tambien podemos instalar `async/await` para trabajar con funciones asincronas como Fetch. Para poder trabajar webpack con babel debemos instalar babel-loader, con esto ya tendriamos para trabajar con JavaScript Moderno. Pero podemos agregar otros plugins, por ejemplo cuando pasemos nuestro poryecto de producción a desarrollo necesitaremos que nuestro Html se minifique para esto se debe instalar otro modulo `html-webpack-plugin` y para finalizar necesitamos un servidor de desarrollo para esto debemos agregar "webpack-dev-server". Con esto ya tememos todos nuestros modulos requeridos.

~~~
		npm i webpack webpack-cli @babel/core @babel/preset-env @babel/polyfill babel-loader html-webpack-plugin webpack-dev-server
~~~

6. Ahora necesitamos configurar nuestro proyecto para esto en la raiz creamos un archivo llamado
   webpack.config.js , esto es para configurar a webpack.

7. También debemos configurar a babel para esto hay varias formas pero lo realizaremos creando el archivo
 .babelrc , ambos archivos me serviaran para configurar webpack y babel.

~~~
   webpack.config.js

    const path = require('path')
	module.exports = {
		entry:{
			app:'./src/app/index.js'
		},
		output:{
			path: path.resolve(__dirname, 'build'),
			filename: 'app.bundle.js'
		}
	}
~~~

8. Una vez ya configurado el webpack.config.js en la cual definimos archivos de entrada y de salida, podemos ejecutar el proceso de entrada y de salida con el siguiente comando en el terminal (npx indica que se ejecutara uno de los paquetes ya instalados en este caso el de webpack ):

~~~
	npx webpack
~~~
  

9. Ojo si observas en la terminal existe un warning dado que no hemos definido si estamos en producción o en desarrollo. Para esto podemos indicar en la terminal si es que estamos en mode desarrollo o producción con los siguientes comandos:

~~~	
	npx webpack -p
	npx webpack -d
~~~

10. Hasta aqui solo estamos minificando Javascript, pero tambien podemos minificar HTMl para esto debemos importar el plugins en el webpack.config.js (Recordemos que el plugins esta en package.json). 

~~~	
	const HtmlWebpackPlugins = require('html-webpack-plugin');

	plugins: [

		new HtmlWebpackPlugins({
			template: './src/index.html'
		})
	]
 ~~~	

11. Aplicamos el comando de produccion.

 ~~~	
	npx webpack -d
 ~~~	

12. Si observamos se genero el HTML vinculado con el JS

13. Tambien podriamos comprimir el HTML para esto visitamos la configuracion del plugins
	Buscamos en Google "html webpack plugin" La URL es :
	[URL A PLUGINS HTML WEBPACKS](https://github.com/jantimon/html-webpack-plugin) y buscamos la opción minify y la incorporamos en la configuración del plugins.
 ~~~
	{
	  collapseWhitespace: true,
	  removeComments: true,
	  removeRedundantAttributes: true,
	  removeScriptTypeAttributes: true,
	  removeStyleLinkTypeAttributes: true,
	  useShortDoctype: true
	}
 ~~~

14. Entonces el archivo `webpack.config.js` quedaría de la siguiente forma:

	//Usamos un modulo de Node llamado path
	const path               = require('path');
	const HtmlWebpackPlugins = require('html-webpack-plugin');

~~~
	module.exports = {
	entry:{
		app:'./src/app/index.js'
	},
	output:{
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	plugins: [

		new HtmlWebpackPlugins({
			template: './src/index.html',
			minify:{
			  collapseWhitespace: true,
			  removeComments: true,
			  removeRedundantAttributes: true,
			  removeScriptTypeAttributes: true,
			  removeStyleLinkTypeAttributes: true,
			  useShortDoctype: true
			}
		})
	]
	}
~~~

15. Ya estamos conviertiendo el codigo hacia la carpeta build, ahora podemos ordenar la carpeta build como por ejemplo crear la carpeta JS dentro de build, esto se realiza solo agregando en el output en el filename `js/app.bundle.js`.

16. Ahora vemos ejemplo de JavaScript Moderno con FETCH y Llamada asincrona, para eso creamos una clase llamada `Photos`.

~~~
  // Creamos la clase en el archivo photos.js
  class Photos {
    // Creamos el metodo que recupera la clase
    async getPhotos(){
      const res    = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12');
      const photos = await res.json();
      return photos;
    }
  }
~~~

17. Exportamos la clase para poder importarla export default Photos.

~~~
  //Importamos la clase en el index.js
  import Photos from './photos';

  // Podemos crear una nueva instancia del objeto Photos 

  const photos = new Photos();

  // Como es una funcion asincrona se llama async

  async function main(){
    console.log(await photos.getPhotos())
  }

  main();
~~~

18. No es muy productivo tener que cada ves que realizamos un cambio tener que ejecutar el comando `npx webpack -d` , para evitar esto podemos activar el plugins `webpack-dev-server`. Esto lo realizamos con el comando `npx webpack-dev-server`.

Podemos cambiar el host del server incorporando en el archivo `webpack.config.js` el objeto `devServer`:

~~~
  devServer:{
    port:4000
  }
~~~

No olvidar que deben re iniciar el server con `npx webpack-dev-server`.

19. Ahora podemos hacer algunas cosas con css, para esto debemos instalar `CSS Loader`, esto lo puedes ver en [CSS LOADER](https://github.com/webpack-contrib/css-loader). No olvidar que css-loader depende de style-loader.

~~~
  npm install css-loader style-loader
~~~

Esto nos ayudara a importar desde Javascript el css, ahora esto no es lo ideal para la produccion de una aplicación por lo tanto para separar el css de nuestra aplicación debemos instalar [MINI CSS EXTRACT PLUGINS](https://github.com/webpack-contrib/mini-css-extract-plugin).

20. Ahora configuraremos BABEL, para que funciones BABEL debemos configurarlo em "webpack.config.js" en especifico en las "rules" se debe incorporar el codigo que le inqueque que tome todo archivo JS y este lo interprete BABBEL a una versión de JS antiguo. Ejemplo del código:

~~~
	{
        test: /\.js$/,
   		loader: 'babel-loader'
	}
~~~

Además de este codigo debemos tamién configurar en la RAIZ el archivo `.babelrc.json` no olvidar que en la documentación exiten más formas de activar a BABEL,

~~~	
	{
  		"presets": ["@babel/preset-env"]
	}
~~~

21. Para poder testear utilizaremos una sintaxtis de JavaScript Moderno para esto en el buscador realizaremos la siguiente busqueda "Javascript ecmascript 10"


# RESUMEN
~~~	
	// Produccion
		npx webpack -p
	// Desarrollo
		npx webpack -d
	// Activar el servidor
		npx webpack-dev-server
~~~	
</section>