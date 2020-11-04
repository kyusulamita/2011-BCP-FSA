/* eslint-disable eqeqeq */
/* eslint-disable no-eq-null */
/* eslint-disable use-isnan */
/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */


console.log(Boolean('false'))
console.log(null == undefined)
console.log(NaN == null)
console.log(NaN == undefined)
console.log(NaN === NaN)

if ('apples'){
  console.log('in the if')
} else {
  console.log('else')
}

if ('apples'){
  console.log('in the if')
} else {
  console.log('else')
}


if (''){
// if (Boolean('')) {
  console.log('in the if')
} else {
  console.log('else')
}

if (10){
// if (Boolean(10)){
  console.log('in the if')
} else {
  console.log('else')
}

if (30 + 20 - 50){
// if (Boolean(30 + 20 - 50)){
  console.log('in the if')
} else {
  console.log('else')
}

if ('apples' === 'apples') {
  console.log('in the if')
} else {
  console.log('else')
}
