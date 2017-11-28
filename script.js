var text= 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur= 'Triceratops';
function getText(text, dinosaur) {
var text2= text.replace('Velociraptor', dinosaur);
return text2
}
var newText= getText(text, dinosaur);
console.log(newText.length/2);
console.log(newText.slice(0, 72));
