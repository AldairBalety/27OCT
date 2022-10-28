var canvas = 
    document.getElementById("canvas"),
    anchura = canvas.width,
    altura = canvas.height,
    cd = canvas.getContext("2d"),
    x, y, radio, radiox, radioy,
    ancho, alto, cad
    unipix = 20;

cd.lineWidth = 1;
cd.strokeStyle = 'Turquoise';
for(y=0; y<altura; y+=unipix){
    cd.moveTo(0, y);
    cd.lineTo(anchura, y);
}
for(x=0; x<anchura; x+=unipix){
    cd.moveTo(x, 0);
    cd.lineTo(x, altura);
}
cd.stroke();

x = anchura / 2;
y = altura / 2;
radio = 10;
cd.beginPath();
cd.strokeStyle = "Black";   // #000000
cd.arc(x, y, radio-7, 0, 2*Math.PI);

var na = Math.random() * 255;
var z = Math.floor(na);
var z_hex = z.toString(16); 

cd.fillText(na, x+5, y);
cd.fillText(z, x, y+20);
cd.fillText(z_hex, x, y+40);
// cd.fillStyle = "Red";
cd.fillStyle = "#" + 
    Math.floor(Math.random() * 255).toString(16) +
    Math.floor(Math.random() * 255).toString(16) +
    Math.floor(Math.random() * 255).toString(16);
cd.fill();

cd.fillStyle = "#" + 
    Math.floor(Math.random() * 255).toString(16) +
    Math.floor(Math.random() * 255).toString(16) +
    Math.floor(Math.random() * 255).toString(16);
cd.strokeStyle = "Black";   // #000000
cd.beginPath();
cd.moveTo(x, y-60);
cd.arc(x, y-60, radio+40, 2*Math.PI/12, 2*2*Math.PI/12);
cd.closePath();
cd.fill();   