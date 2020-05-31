//Importamos fotos desde el archivo
import Photos from './photos';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import './index.scss';




// Podemos crear una nueva instancia del objeto Photos 
const photos = new Photos();

// Como es una funcion asincrona se llama async
async function main(){
	const fotos     =  await photos.getPhotos()
	//const postFotos = document.getElementById("postFotos");
	const data = fotos.map(foto=>{
	return (`<div class="col-lg-3" <div class="card" id="${foto.id}">
		<img src="${foto.url}" class="card-img-top" alt="${foto.title}">
		<div class="card-body">
		  <h5 class="card-title">Título ${foto.id}</h5>
		  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#titulo-00${foto.id}">
		  Ver detalle
		</button>
		</div>
	  </div></div><!-- Button trigger modal -->

	  <!-- Modal -->
	  <div class="modal fade" id="titulo-00${foto.id}" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
		  <div class="modal-content">
			<div class="modal-header">
			  <h5 class="modal-title" id="staticBackdropLabel">Título ${foto.id}</h5>
			  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			<div class="modal-body">
				<img src="${foto.url}" class="card-img-top" alt="${foto.title}">
				<h5 class="card-title my-3">Título ${foto.id}</h5>
				<p class="card-text">${foto.title}</p>
			</div>
			<div class="modal-footer">
			  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			  <button type="button" class="btn btn-primary">Understood</button>
			</div>
		  </div>
		</div>
	  </div>`)
	})
	document.getElementById('postFotos').innerHTML = data.join('') ;
}

main();