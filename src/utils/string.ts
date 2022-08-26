export const getWelcomeString = () => {
  const hours = new Date().getHours();
  let timeStr = 'morning';
  if (hours > 11) {
    timeStr = 'afternoon';
  }
  if (hours > 14) {
    timeStr = 'evening';
  }
  return `Good ${timeStr}!`;
};

export const uppercaseFirstLetter = (sentence: string) => {
  const words = sentence.trim().split(' ');
  return words
    .map(word => {
      return word[0]?.toUpperCase() + word.substring(1);
    })
    .join(' ');
};
