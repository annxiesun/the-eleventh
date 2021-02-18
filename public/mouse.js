tool.fixedDistance = 10;

var path;
var strokeEnds = 6;
var num_strokes =0;
var count = 0;

path = new Path();
path.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
};

function onMouseDown(event) {
    
    if (num_strokes>=3){
    project.activeLayer.removeChildren();
    num_strokes=0;
    } else {
    num_strokes+=1;
	path = new Path();
	path.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
    };
}
    
}

var lastPoint;
function onMouseMove(event) {
    if(count<50){
        
    if(event.count == 0) {
		addStrokes(event.middlePoint, event.delta * -1);
	} else {
		var step = event.delta / 2;
		step.angle += 90;

		var top = event.middlePoint + step;
		var bottom = event.middlePoint - step;

		path.add(top);
		path.insert(0, bottom);
	}
	path.smooth();
	
    lastPoint = event.middlePoint;
    count+=1;
}
}

function onMouseUp(event) {
	var delta = event.point - lastPoint;
	delta.length = tool.maxDistance;
	addStrokes(event.point, delta);
	path.closed = true;
    path.smooth();
}
function onMouseDrag(event) {
	// If this is the first drag event,
    // add the strokes at the start:
	if(event.count == 0) {
		addStrokes(event.middlePoint, event.delta * -1);
	} else {
		var step = event.delta / 2;
		step.angle += 90;

		var top = event.middlePoint + step;
		var bottom = event.middlePoint - step;

		path.add(top);
		path.insert(0, bottom);
	}
	path.smooth();
	
	lastPoint = event.middlePoint;
}

function onMouseUp(event) {
	var delta = event.point - lastPoint;
	delta.length = tool.maxDistance;
	addStrokes(event.point, delta);
	path.closed = true;
    path.smooth();
    

}

function addStrokes(point, delta) {
	var step = delta.rotate(90);
	var strokePoints = strokeEnds * 2 + 1;
	point -= step / 2;
	step /= strokePoints - 1;
	for(var i = 0; i < strokePoints; i++) {
		var strokePoint = point + step * i;
		var offset = delta * (Math.random() * 0.3 + 0.1);
		if(i % 2) {
			offset *= -1;
		}
		strokePoint += offset;
		path.insert(0, strokePoint);
	}
}