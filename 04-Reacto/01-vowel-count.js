// I will loop over every character in the string.
// For each character, I will convert to Lower toLowerCase
// and then check if it's any of the vowels
// If it does, I will increment my vowelCount
// After my loop, I will return the total vowelCount

function vowelCount(str) {
  let vowelCount = 0;
  // const vowels = 'aeiouy';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerChar = char.toLowerCase()
    // console.log(lowerChar)

    //check if it exists in a string of vowels

    // iterate over my vowel string
    // comparing my lower char to the current vowel each time

    // for (let j = 0; j < vowels.length; j++) {
    //   const currentVowel = vowels[j]
    //   // console.log('comparing', lowerChar, 'to')
    //   // console.log('current vowel', currentVowel)
    //   // looking for a match

    //   if (currentVowel === lowerChar) {
    //     // that my lower char is a vowel
    //     // increase count
    //     vowelCount++;
    //   }
    // }

    // if (vowels.includes(lowerChar)) {
    //   vowelCount++;
    // }

    if (
      // lowerChar === 'a' || 'e'|| 'i' || 'o' || 'u' || 'y'
      // lowerChar === 'a'
      lowerChar === 'a' || 
      lowerChar === 'e' || 
      lowerChar === 'o' ||
      lowerChar === 'i' ||
      lowerChar === 'u' ||
      lowerChar === 'y'
    ) {
      vowelCount++;
    }
  }

  // after checking all the letters
  // want to return the vowel count
  return vowelCount
}



console.log(vowelCount('Yummy Food')); // 5
console.log(vowelCount('hello')); // 2
console.log(vowelCount('')); // 0