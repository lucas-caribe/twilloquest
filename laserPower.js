function calculatePower(numbers) {
  return numbers.reduce((sum, n) => sum + n * 2, 0);
}