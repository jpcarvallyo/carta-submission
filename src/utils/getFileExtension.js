export const getFileExtension = (fileName) => {
  // Find the last occurrence of "." in the file name
  const lastDotIndex = fileName.lastIndexOf(".");

  // If "." is not found or it's the last character in the string, return an empty string
  if (lastDotIndex === -1 || lastDotIndex === fileName.length - 1) {
    return "";
  }

  // Get the substring after the last "."
  const extension = fileName.slice(lastDotIndex + 1);

  // Convert the extension to lowercase to handle cases like '.JPG' or '.HTML'
  return extension.toLowerCase();
};
