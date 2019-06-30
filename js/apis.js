var mapa; // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */

// Inicializa el mapa con un valor de zoom y una locación en el medio
const posicionCentral = {
	lat: -34.6179165, //cord1
	lng: -58.4892222 //cord2
};

function inicializarMapa() {
	mapa = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: posicionCentral });
	geocodificadorModulo.inicializar();
	marcadorModulo.inicializar();
	direccionesModulo.inicializar();
	lugaresModulo.inicializar();
	streetViewModulo.inicializar();
}
