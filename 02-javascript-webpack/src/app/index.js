//Importamos fotos desde el archivo
import Photos from './photos';
import './index.scss';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';



// Podemos crear una nueva instancia del objeto Photos 
const photos = new Photos();

// Como es una funcion asincrona se llama async
async function main(){
	console.log(await photos.getPhotos())
}

// Test de ejmplo de Javascript Moderno
// function isValidJSON(text) {
//   try {
//     JSON.parse(text);
//     return true;
//   } catch {
//     return false;
//   }
// }

// console.log(isValidJSON('test'));
main();

