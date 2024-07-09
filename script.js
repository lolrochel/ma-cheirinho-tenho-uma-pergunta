function selectOption(option) {
  if (option === 'yes') {
    document.body.style.backgroundColor = '#ff28ac';
    document.getElementById('question').style.display = 'none';
    document.getElementById('poema').style.display = 'block';
    displayCatBesito();
    confetti();
  } else if (option === 'no') {
    displayAngryCat();
    document.getElementById('no-button').innerText = 'por favorzinho';
    var yesButton = document.getElementById('yes-button');
    var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 2;
    yesButton.style.fontSize = newSize + 'px';
  } else {
    alert('Opção inválida. Tu tá tentando quebrar a página?');
  };
}

function displayVoche() {
  var vocheButton = document.getElementById('pochebutton');
  vocheButton.innerText = 'vochê!';
  var currentFontSize = window.getComputedStyle(vocheButton).getPropertyValue('font-size');
  var newSize = parseFloat(currentFontSize) * 2;
  vocheButton.style.fontSize = newSize + 'px';
}

function displayCat() {
  var imageContainer = document.getElementById('image-container');
  var catImage = new Image();
  catImage.src = './img/egg-ghost.gif';
  catImage.alt = 'Gato puxando sua meia';
  catImage.onload = function() {
    imageContainer.appendChild(catImage);
  };
}

function displayCatBesito() {
  document.getElementById('image-container').innerHTML = '';
  var imageContainer = document.getElementById('image-container');
  var catBesitoImage = new Image();
  catBesitoImage.src = './img/happy-egg-ghost.gif';
  catBesitoImage.alt = 'Cato te beisando';
  catBesitoImage.onload = function() {
    imageContainer.appendChild(catBesitoImage);
    document.getElementById('options').style.display = 'none';
  };
}

function displayAngryCat() {
  document.getElementById('image-container').innerHTML = '';
  var imageContainer = document.getElementById('image-container');
  var catImage = new Image();
  catImage.src = './img/angry-egg-ghost.gif';
  catImage.alt = 'Gato puxando sua meia';
  catImage.onload = function() {
    imageContainer.appendChild(catImage);
  };
}

displayCat();

/* 
penso em te abraçar pra sempre e te guardar num pote <br>
me faz bem no cérebro, no corpo, na alma. o completo pacote <br>
amo as coisas que fazem você você! <br>
<br>
tu tem bom gosto pra arte e adoro seu gosto na minha glote <br>
esses pontinhos escuros são pimenta? pq tu tá mt hot <br> 
<br>
eu queria falar algo que rima com <br>
eu amo ovo poché!
*/