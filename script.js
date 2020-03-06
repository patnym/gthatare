let currentHateIndexes = [];

function setHateIndex(veryRandomGtArray) {
  document.getElementById(
    "gt-hater1"
  ).textContent = veryRandomGtArray[0].toString();
  document.getElementById(
    "gt-hater2"
  ).textContent = veryRandomGtArray[1].toString();
  document.getElementById(
    "gt-hater3"
  ).textContent = veryRandomGtArray[2].toString();
  document.getElementById(
    "gt-hater4"
  ).textContent = veryRandomGtArray[3].toString();
}

function getInitialHateIndex() {
  const gtRandom1 = Math.floor(Math.random() * 100);
  const gtRandom2 = Math.floor(Math.random() * 100);
  const gtRandom3 = Math.floor(Math.random() * 100);
  const gtRandom4 = Math.floor(Math.random() * 100);
  currentHateIndexes = [gtRandom1, gtRandom2, gtRandom3, gtRandom4];
  return [gtRandom1, gtRandom2, gtRandom3, gtRandom4];
}

function updateHateIndex(hateIndexes) {
  const newHateIndexes = [];
  newHateIndexes[0] = hateIndexes[0] + Math.floor(Math.random() * 30);
  newHateIndexes[1] = hateIndexes[1] + Math.floor(Math.random() * 30);
  newHateIndexes[2] = hateIndexes[2] + Math.floor(Math.random() * 30);
  newHateIndexes[3] = hateIndexes[3] + Math.floor(Math.random() * 30);
  return newHateIndexes;
}

function setInitialHateIndex() {
  setHateIndex(getInitialHateIndex());
}

function setUpdatedHateIndexes() {
  const newHateIndexes = updateHateIndex(currentHateIndexes);
  setHateIndex(newHateIndexes);
  move(newHateIndexes, 0);
  move(newHateIndexes, 1);
  move(newHateIndexes, 2);
  move(newHateIndexes, 3);
  catsopatsotimeu();
}

setInitialHateIndex();
setInterval(setUpdatedHateIndexes, 1000);

function cat(cat) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < cat; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function move(newHateIndexes, id) {
  var elem = document.getElementById("bar-" + id + "").style;
  elem.width = newHateIndexes[id] + "%";
  elem.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
}

function catsopatsotimeu() {
  var catt = document.getElementById("cat");
  const catcat = Math.floor(Math.random() * 255);
  catt.textContent = cat(1);
  catt.style.color =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
}
