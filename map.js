
function setUserName() {
  let myName = prompt('名前を入力してください');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'はじめまして, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'こんにちは, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}