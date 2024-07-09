function selectOption(option) {
  if (option === 'yes') {
    document.body.style.backgroundColor = '#ff28ac';
    document.getElementById('question').style.display = 'none';
    displayCatBesito();
  } else if (option === 'no') {
    document.getElementById('no-button').innerText = 'por favorzinho';
    var yesButton = document.getElementById('yes-button');
    var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 2;
    yesButton.style.fontSize = newSize + 'px';
  } else {
    alert('Opção inválida. Tu tá tentando quebrar a página?');
  };
}

function displayCat() {
  var imageContainer = document.getElementById('image-container');
  var catImage = new Image();
  catImage.src = './img/attention-seeking.gif';
  catImage.alt = 'Gato puxando sua meia';
  catImage.onload = function() {
    imageContainer.appendChild(catImage);
  };
}

function displayCatBesito() {
  document.getElementById('image-container').innerHTML = '';
  var imageContainer = document.getElementById('image-container');
  var catBesitoImage = new Image();
  catBesitoImage.src = './img/kiss.gif';
  catBesitoImage.alt = 'Cato te beisando';
  catBesitoImage.onload = function() {
    imageContainer.appendChild(catBesitoImage);
    document.getElementById('options').style.display = 'none';
    confetti();
  };
}

displayCat();