const isEmpty = str => str.trim().length === 0;
const noDigitsRegex = /\d/;

export const validateWord = value => {
  let error = null;

  if (isEmpty(value)) {
    error = 'Empty field';
  } else if (noDigitsRegex.test(value)) {
    error = 'Contains digits';
  }
  return error;
};
