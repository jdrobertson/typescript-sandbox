const getFirstMatchRange = (
  main: string[],
  word: string[]
): number | undefined => {
  if (!main?.length && !word?.length) {
    return undefined;
  }

  if (word.length > main.length) {
    return undefined;
  }

  let wordIndex = 0;

  for (let mainIndex = 0; mainIndex < main.length; mainIndex++) {
    const mainLetter = main[mainIndex];

    const wordLetter = word[wordIndex];

    if (mainLetter === wordLetter) {
      wordIndex++;

      if (wordIndex === word.length) {
        return mainIndex + 1;
      }
    }
  }

  return undefined;
};

/**
 * Returns the minimum number of characters (range) within main in which all
 * of the characters in word can be found in order
 * @param main - The characters to search within
 * @param word - The characters to search for
 * @returns The minimum range or undefined if the characters in word cannot be found in order within main
 */
export const minRange = (
  main: string[],
  word: string[]
): number | undefined => {
  if (!main?.length && !word?.length) {
    return undefined;
  }

  if (word.length > main.length) {
    return undefined;
  }

  let minimumRangeFound = undefined;

  for (let mainIndex = 0; mainIndex < main.length; mainIndex++) {
    const slicedMain = main.slice(mainIndex);

    const range = getFirstMatchRange(slicedMain, word);

    if (range === undefined) {
      return minimumRangeFound;
    }

    if (minimumRangeFound === undefined || range < minimumRangeFound) {
      minimumRangeFound = range;
    }
  }

  return minimumRangeFound;
};
