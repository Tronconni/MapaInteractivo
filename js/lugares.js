lugaresModulo = (function() {
	var servicioLugares; // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

	// Completa las direcciones ingresadas por el usuario a y establece los límites
	// con un círculo cuyo radio es de 20000 metros.
	function autocompletar() {
		const circulo = new google.maps.Circle({
			map: mapa,
			center: mapa.getCenter(),
			radius: 20000,
			strokeOpacity: 0,
			fillOpacity: 0
		});

		new google.maps.places.Autocomplete(document.getElementById('desde'), { bounds: circulo.getBounds() });
		new google.maps.places.Autocomplete(document.getElementById('hasta'), { bounds: circulo.getBounds() });
		new google.maps.places.Autocomplete(document.getElementById('direccion'), { bounds: circulo.getBounds() });
		new google.maps.places.Autocomplete(document.getElementById('agregar'), { bounds: circulo.getBounds() });

		/* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
	}

	// Inicializo la variable servicioLugares y llamo a la función autocompletar
	function inicializar() {
		servicioLugares = new google.maps.places.PlacesService(mapa);
		autocompletar();
	}

	// Busca lugares con el tipo especificado en el campo de TipoDeLugar

	function buscarCerca(posicion) {
		let request = {
			location: posicion,
			radius: parseInt($('#radioS').text()).toString(),
			types: [ $('#tipoDeLugar')[0].value ]
		};
		servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
		/* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
	}
	return {
		inicializar,
		buscarCerca
	};
})();
