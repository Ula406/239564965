function imgSlider(anything){   document.querySelector('.starbucks').src = anything; }

const text = "A Massatges Fonoll som una empresa dedicada a oferir benestar i relaxació. Situats en un espai tranquil al cor d'un poble encantador, combinem tècniques tradicionals i innovadores per adaptar-nos a les necessitats de cada client. Creiem en la importància de la personalització, la sostenibilitat i l'atenció plena, oferint tractaments que cuiden tant el cos com la ment. El nostre equip de professionals està altament qualificat i compromès a crear una experiència única en un ambient càlid i harmònic, envoltat d’aromes naturals i música suau. A Massatges Fonoll, cada detall està pensat per convertir-nos en el teu refugi de calma i serenitat.";
const output = document.getElementById("output");
const words = text.split(" ");
let index = 0;

          function showText() {
              if (index < words.length) {
                  // Crear un element <span> per a cada paraula
                  const span = document.createElement("span");
                  span.textContent = words[index]; // Afegeix només la paraula
                  span.classList.add("fade-in");
                  output.appendChild(span);

                  // Afegeix un espai després de la paraula
                  output.appendChild(document.createTextNode(" "));

                  // Fer que el span es mostri suaument
                  setTimeout(() => span.classList.add("visible"), 100);

                  index++;
                  setTimeout(showText, 256); // Temps entre paraules
              }
          }

showText();