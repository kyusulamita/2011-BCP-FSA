/*

In order to keep examples from running leave them commented out.

If you want to run a specific file, come in here and remove the `//` from the front of the file name

*/


// require("./01-indenting")
// require("./02-variable-names")

function styleMePretty() {
  let truth = '';
  function innerBeauty(count) {
    let result = '';
    while (count > 0) {
      count--;
      if (count === 2) {
        result += 'Unformatted code';
      }
    }
    result += ' is difficult to parse';
    return result;
  }
  truth += innerBeauty(5);
  truth += ' for humans if not for machines';
  return truth;
}