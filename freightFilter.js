function scanAndFilter(strings, text) {
  let filteredStrings = strings.filter(s => s !== text);

  return filteredStrings;
}