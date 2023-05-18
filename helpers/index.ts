export const splitText = (text: string) => {
  // Split the text into individual letters while preserving whitespace
  return text.split(/(?<=\S)|(?=\S)/);
};
