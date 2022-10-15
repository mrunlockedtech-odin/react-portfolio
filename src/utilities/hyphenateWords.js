export function hyphenateWords(titleString) {
  return titleString.toLowerCase().replace(/\s/g, "-")
}
