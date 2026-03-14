function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}

function calculateFactorial() {
  const input = document.getElementById('numFactorial');
  const output = document.getElementById('outputFactorial');
  const n = parseInt(input.value);

  if (isNaN(n)) {
    output.textContent = "Ingrese un valor numérico.";
    return;
  }

  if (n < 0) {
    output.textContent = "El factorial no está definido para números negativos.";
  } else {
    const result = factorialRecursive(n);
    output.textContent = "El factorial es: " + result;
  }
}
