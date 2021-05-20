function calculateMass(strings) {
  return strings.reduce((sum, current) => sum + current.length, 0);
}