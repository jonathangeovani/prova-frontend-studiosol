export const textParser = (text: string | undefined) => {
  const isMatch = text?.match(/About.*:/);
  const parsedText = [];
  if (isMatch && text) {
    parsedText[0] = text.slice(0, isMatch.index).trim();
    parsedText[1] = isMatch[0];
    parsedText[2] = text.split(/About.*:/)[1].trim();

    return { isAbout: true, content: parsedText };
  }

  parsedText[0] = text?.trim();

  return { isAbout: false, content: [parsedText] };
};
