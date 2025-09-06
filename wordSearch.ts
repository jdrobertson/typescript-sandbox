const wordSearch = (main: string[], word: string[]) => {
  if (!main?.length && !word?.length) {
    return false;
  }

  if (word.length > main.length) {
    return false;
  }

  let wordIndex = 0;

  main.forEach((mainLetter) => {
    const wordLetter = word[wordIndex];

    if (mainLetter === wordLetter) {
      wordIndex++;

      if (wordIndex === word.length) {
        return true;
      }
    }
  });

  return false;
};

/**
 * main = [a, c, b]
 * word = [a, b]
 *
 * mainLetter = a
 * word[index] = a
 * incremenet index and go to next main letter
 *
 * mainLetter = c
 * word[index] = b
 *
 * if they don't match
 * go to next letter in main
 *
 * if we run out of letters in main then return false (unless we reached the end of word at the same time)
 * if we run out of letters in word then return true
 */

const minRange = (word: string[], main: string[]): number | undefined => {};
