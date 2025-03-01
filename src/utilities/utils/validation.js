const isEmpty = str => str.trim().length === 0;
const noDigitsRegex = /\d/;
const bracketsRegex = /^\[.*\]$/;

export const validateWord = value => {
  let error = '';
  if (isEmpty(value)) {
    error = 'Empty field';
  } else if (noDigitsRegex.test(value)) {
    error = 'Contains digits';
  }
  return error;
};

export const validateTranscription = value => {
  let error = validateWord(value);
  if (!error && !bracketsRegex.test(value.trim())) {
    error += 'Use brackets';
  }
  return error;
};
