const generateRandomCode = () => {
  const codeLength = Math.floor(Math.random() * 10) + 5;
  const code = '';
  for (let i = 0; i < codeLength; i++) {
    const char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    code += char;
  }
  return code;
}
