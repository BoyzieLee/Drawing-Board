function digitize(n) {

  var convert = n.toString();

  var sperate = convert.split('');

  return sperate.map(function (str){
    return parseInt(str);

  });
}

let x = digitize (5675676797897856765);
console.log(x);
