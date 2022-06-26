const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('url')) {
	var source = urlParams.get('url');
	var title = urlParams.get('title');
} else {	
	var source = "https://free.iiifhosting.com/iiif/1c8d49343676a04fffcd92979c02e9394e48bac96f590fffbadffc9133cd06b9/info.json";
	var title = "Siège de Poitiers par Coligny en 1569, peinture de François Nautré";
}

window.onload = function() {
	//document.getElementById('openseadragon').innerHTML = '<small><i>' + title + '</i></small>';

	var viewer = OpenSeadragon({
		id: "openseadragon",
		prefixUrl: "/icons/",
		tileSources: source,
		gestureSettingsTouch: {
			pinchRotate: true
		},
		showRotationControl: true,

	});

	var anno = OpenSeadragon.Annotorious(viewer, {
		locale: 'auto',
		drawOnSingleClick: true,
		allowEmpty: true,
		disableEditor: false
	});

	// Init the ToolBar plugin
	Annotorious.Toolbar(anno, document.getElementById('toolbar-container'));

	anno.loadAnnotations('annotations.w3c.json');

	anno.on('createAnnotation', function(a) {
	});
}
