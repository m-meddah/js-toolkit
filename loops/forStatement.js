// Example

for (let pas = 0; pas < 5; pas++) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    console.log('Faire ' + pas + ' pas vers l\'est');
};


// Structure

// for ([expressionInitiale]; [condition]; [expressionIncrément])
//   instruction

// Autre example

function quantité(selectObject) {
    let qtéSélectionnée = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        qtéSélectionnée++;
      }
    }
    return qtéSélectionnée;
};
