addEventListener('load', onLoad);
addEventListener('load', imageChange);
addEventListener('load', addCssBorder);
addEventListener('load', createImage);
addEventListener('load', createTable);

// addEventListener('load', function () {
//   document.body.addEventListener('mousemove', function(event) {
//     console.log('Mouse moved', event.clientY);
//     console.log(event.clientY / document.body.scrollHeight) * 255;
//     var color = event.clientY / document.body.scrollHeight) * 255;
//     document.body.style.backgroundColor = 'rgb(' + color + ', ' + color + ', ' + color + ')';
//   });
// });

function onLoad() {
  console.log(document.getElementById('main'));
  console.log(document.getElementsByTagName('p'));
  console.log(document.getElementsByClassName('subheading'));
  console.log(document.querySelector('p'));    //
  console.log(document.querySelectorAll('p'));
  console.log(document.body);
}


//UPG 2
//CHANGE IMAGE, img in th html file
function imageChange() {
  console.log(document.querySelector('img').getAttribute('src'));
  console.log(document.querySelector('#pic2').setAttribute('src', 'space-shuttle-992_1920.jpg'));
}

// UPG 3 och 4
function addCssBorder() {
  document.querySelector('img').style.border = 'solid 0.5em red';
  var img = document.querySelector('img');
  // console.log(img.style);
  //Get even more image attibutes;
  // console.log(getComputedStyle(img));
}

// UPG 5 oc 6 7
// create img with JS, Dom nodes create append, replace and remove
function createImage() {
  var createdImg = document.createElement('img');
  var parent = document.getElementById("div1");
  parent.appendChild(createdImg);
  createdImg.setAttribute('src', 'bunny2.jpg');
  createdImg.setAttribute('alt', '');
  createdImg.style.border = 'solid 0.5em blue';
  console.log(createdImg);

  var text1 = document.createElement("p");
  text1.innerHTML = "var txt1 Tää on addattu JSllä Text inside div1.<p1> ennen"
  var child = document.getElementById("p1");
  parent.insertBefore(text1, child);

  //remove and add
  // var text2 = document.createElement("p");
  // text1.innerHTML = "var text2 Tää postetaan next"
  // parent.replaceChild(text2, child);
  //
  // parent.removeChild(text1);
}


//UPG 8 och 9 se början
//Mouse pointers changes background color obs body height and
// function mouseEventListener() {
//   document.body.addEventListener('mousemove', function() {
//     console.log('Mouse moved');
//   });
// }


//UPG 10
function createTable () {
  var csv = "Stockholm,1372565\nGöteborg,549839\nMalmö,280415\nUppsala,140454\nVästerås,110877\nÖrebro,107038\nLinköping,104232\nHelsingborg,97122\nJönköping,89396\nNorrköping,87247";

  function parse(string, isCsv) {
    return string.split('\n').map(function (row) {
      return row.split(isCsv ? ',' : '\t')
    });
  }

  var cities = parse(csv, true);
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');

  th1.appendChild(document.createTextNode('Stad'));
  th2.appendChild(document.createTextNode('Befolkning'));
  tr.appendChild(th1);
  tr.appendChild(th2);
  table.appendChild(tr);
  // document.body.appendChild(table);
  var parent2 = document.getElementById("div2");
  parent2.appendChild(table);

  //Testloop data
  // cities.forEach(function (city) {
  //   console.log(city);
  // });

  cities.forEach(function (city) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.appendChild(document.createTextNode(city[0]));
    td2.appendChild(document.createTextNode(city[1]));
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });

}























//Learnings
// console.log(document.getElementsByTagName('p'));
// Queryselector - returns first element within the document that matches the specified selector.

// NodeList objects are collections of nodes such as those returned by properties such as Node.childNodes and the document.querySelectorAll() method.
