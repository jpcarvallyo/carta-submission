export const getFileExtension = (fileName) => {
  // Handle edge cases
  if (!fileName || typeof fileName !== "string") {
    return "";
  }

  // Find the last occurrence of "." in the file name
  const lastDotIndex = fileName.lastIndexOf(".");

  // If "." is not found or it's the last character in the string, return an empty string
  if (lastDotIndex === -1 || lastDotIndex === fileName.length - 1) {
    return "";
  }

  // Get the substring after the last "." and convert to lowercase
  // Handle cases like '.JPG' or '.HTML'
  return fileName.slice(lastDotIndex + 1).toLowerCase();
};
