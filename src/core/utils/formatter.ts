export function toTitleCase(input: string): string {
  // Split the input string into words
  const words = input.toLowerCase().split(' ');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together into a single string
  return titleCaseWords.join(' ');
}