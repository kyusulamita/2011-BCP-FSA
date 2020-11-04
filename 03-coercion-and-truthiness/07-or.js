/* 
  || returns the first truthy value, 
  or the last value if all are falsey 
*/
let returnedValue1 = null || undefined || 'happy' || 'pumpkin';
console.log('returnedValue1:', returnedValue1);


let returnedValue2 = false || null || 10 < 0 || NaN;
console.log('returnedValue2:', returnedValue2);

