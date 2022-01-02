const saibaMais = document.getElementById('saiba-mais');
const corArray = ['blue','green','red','brown','purple'];

saibaMais.addEventListener('mouseover', changeColor);

function changeColor(){
 const color = createColor();
 saibaMais.style.color = color;
}

function createColor(){
  const colorHex = Math.floor(Math.random() * corArray.length);
  return corArray[colorHex];
}


