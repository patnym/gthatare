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
}

function getInitialHateIndex() {
  const gtRandom1 = Math.floor(Math.random() * 100);
  const gtRandom2 = Math.floor(Math.random() * 100);
  const gtRandom3 = Math.floor(Math.random() * 100);
  currentHateIndexes = [gtRandom1, gtRandom2, gtRandom3];
  return [gtRandom1, gtRandom2, gtRandom3];
}

function updateHateIndex(hateIndexes) {
  const newHateIndexes = [];
  newHateIndexes[0] = hateIndexes[0] - Math.floor(Math.random() * 10) - 9;
  newHateIndexes[1] = hateIndexes[1] - Math.floor(Math.random() * 10) - 9;
  newHateIndexes[2] = hateIndexes[2] + Math.floor(Math.random() * 10) - 9;
  return newHateIndexes;
}

function setInitialHateIndex() {
  setHateIndex(getInitialHateIndex());
}

function setUpdatedHateIndexes() {
  const newHateIndexes = updateHateIndex(currentHateIndexes);
  setHateIndex(newHateIndexes);
}

setInitialHateIndex();
setInterval(setUpdatedHateIndexes, 1000);
