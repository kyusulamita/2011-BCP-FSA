// on the global scope

let global = 'hamster';
console.log('outer', global);


function funFunction() {
  // functional scope
  console.log('inner', global);
}


funFunction();
