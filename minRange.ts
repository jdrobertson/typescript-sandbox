const wordSearch = (main: string[], word: string[]) => {
  if (!main?.length && !word?.length) {
    return false;
  }

  if (word.length > main.length) {
    return false;
  }

  let wordIndex = 0;

  main.forEach((mainLetter, mainIndex) => {
    const wordLetter = word[wordIndex];

    if (mainLetter === wordLetter) {
      wordIndex++;

      if (wordIndex === word.length) {
        return mainIndex;
      }
    }
  });

  return undefined;
};

const minRange = (word: string[], main: string[]): number | undefined => {
  // find the last occurance in main of the first letter in word followed b
  // const letterToLookFor = word[0];

  // main.forEach((val, index) => {
  //     if (val === letterToLookFor) {

  //     }
  // }

  const startIndex = wordSearch(word[0], main);
};
