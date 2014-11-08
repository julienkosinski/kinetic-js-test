'use strict';
window.onload = function() {
	var color;
	var scene = new Kinetic.Stage({
		container: "kinetic-canvas",
		width: 1024,
		height: 500
	});

	var layer = new Kinetic.Layer();

	for(var i=0; i<datas.length; i++) {
		var path = new Kinetic.Path
		({
			stroke: 'black',
			fill: 'white',
			data: datas[i].path
		});
		path.on("click", function(){
			this.setFill(color);
			this.getLayer().draw();
		});
		layer.add(path);
	}

	for(var i=0; i<maPalette.length; i++) {
		var rectangle = new Kinetic.Rect({
			x: 700 + Math.floor(i/5)*60,
			y: 50 + (i%5)*60,
			width: 50,
			height: 50,
			fill: maPalette[i],
			stroke: 'black',
			strokeWidth: 1
		});
		rectangle.on("click", function(){ 
			color = this.fill(); 
		});
		layer.add(rectangle);
	}
	scene.add(layer);
};