function evaluateGrade() {
  const input = document.getElementById('grade');
  const resultP = document.getElementById('result');
  const score = parseFloat(input.value);

  if (isNaN(score)) {
    resultP.textContent = "Ingrese un número válido.";
    return;
  }

  if (score < 0 || score > 10) {
    resultP.textContent = "Error: La calificación debe estar entre 0 y 10.";
  } else if (score < 6) {
    resultP.textContent = "Equivalencia: NA";
  } else if (score < 7.5) {
    resultP.textContent = "Equivalencia: S";
  } else if (score < 9) {
    resultP.textContent = "Equivalencia: B";
  } else if (score < 10) {
    resultP.textContent = "Equivalencia: MB";
  } else {
    resultP.textContent = "Equivalencia: LAP";
  }
}
