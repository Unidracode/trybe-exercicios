function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Ganhar 5.000 por mês em uma boa empresa";
}
changeText();

function changeSquareColor() {
  let squareYellow = document.getElementsByClassName('main-content')[0]
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareColor();

function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();

function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();                                                                                                                       