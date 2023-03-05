// 9 stars
for (var i = 1; i <= 5; i++) {
  var row = '';
  for (var j = 1; j <= 5 - i; j++) {
    row += ' ';
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    row += ' *';
  }
}

// 7 stars
for (var a = 1; a <= 5; a++) {
  var row1 = '';
  for (var b = 1; b <= 7 - a; b++) {
    row1 += ' ';
  }
  for (var c = 1; c <= 2 * a - 3; c++) {
    row1 += ' *';
  }
}

// 5 stars
for (var a = 1; a <= 5; a++) {
  var row2 = '';
  for (var b = 1; b <= 9 - a; b++) {
    row2 += ' ';
  }
  for (var c = 1; c <= 2 * a - 5; c++) {
    row2 += ' *';
  }
}

// 3 stars
for (var a = 1; a <= 5; a++) {
  var row3 = '';
  for (var b = 1; b <= 11 - a; b++) {
    row3 += ' ';
  }
  for (var c = 1; c <= 2 * a - 7; c++) {
    row3 += ' *';
  }
}

// 1 star
for (var a = 1; a <= 5; a++) {
  var row4 = '';
  for (var b = 1; b <= 13 - a; b++) {
    row4 += ' ';
  }
  for (var c = 1; c <= 2 * a - 9; c++) {
    row4 += ' *';
  }
}

console.log(row4);
console.log(row3);
console.log(row2);
console.log(row1);
console.log(row);
