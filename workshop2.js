addEventListener('load', onLoad);
// addEventListener('load', imageChange);
// addEventListener('load', addCssBorder);
addEventListener('load', createImage);

function onLoad() {
  console.log(document.getElementById('main'));
  console.log(document.getElementsByTagName('p'));
  console.log(document.getElementsByClassName('subheading'));
  console.log(document.querySelector('p'));    //
  console.log(document.querySelectorAll('p'));
  console.log(document.body);
}

//CHANGE IMAGE
// function imageChange() {
//   console.log(document.querySelector('img').getAttribute('src'));
//   console.log(document.querySelector('img').setAttribute('src', 'space-shuttle-992_1920.jpg'));
// }

// function addCssBorder() {
//   document.querySelector('img').style.border = 'solid 0.5em red';
//
//   var img = document.querySelector('img');
//   console.log(img.style);
//   //Get even more image attibutes;
//   console.log(getComputedStyle(img));
// }


//Removed the html doc image and let create one with JS
function createImage() {
  var createdImg = document.createElement('img');

  document.body.appendChild('createdImg');  
  console.log(createdImg);
  // document.body.appendChild(img);
  createdImg.setAttribute('src', 'space-shuttle-992_1920.jpg');
  createdImg.setAttribute('alt', '');
  createdImg.style.border = 'solid 0.5em red';
}
