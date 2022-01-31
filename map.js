let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('名前を入力してください');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'こんにちは' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
