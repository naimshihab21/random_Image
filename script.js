const boxPicture = document.querySelector('.boxPicture');
const btn = document.querySelector('.btn');
const h3 = document.querySelector('.h3');

let pasteScript = `<img src="img/${1}.jpg" class="img" >`;
boxPicture.innerHTML = pasteScript;

btn.addEventListener('click', () => {
  let pasteScript = `<img src="img/${Math.floor(Math.random() * 5) + 1}.jpg" class="img" >`;
  boxPicture.innerHTML = pasteScript;
});