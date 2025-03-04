function getRandomCode() {
  const codes = ['ABC123', 'XYZ456', 'LMN789'];
  return codes[Math.floor(Math.random() * codes.length)];
}
