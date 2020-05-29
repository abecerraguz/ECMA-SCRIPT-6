class Photos {
	// Creamos el metodo que recupera la clase
	async getPhotos(){
		const res    = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12');
		const photos = await res.json();
		return photos;
	}
}

// Exportamos la clase para poder importarla
export default Photos;