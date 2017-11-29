var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'Triceratops',
    newDinosaur = dinosaur.toUpperCase(),
    text2= text.replace('Velociraptor', newDinosaur);
console.log(text2.slice(0, text2.length / 2));
