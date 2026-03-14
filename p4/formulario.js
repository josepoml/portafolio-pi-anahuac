function displayData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const dob = document.getElementById('dob').value;
  const color = document.getElementById('favColor').value;

  const genderNodes = document.getElementsByName('gender');
  let gender = '';
  for (let i = 0; i < genderNodes.length; i++) {
    if (genderNodes[i].checked) {
      gender = genderNodes[i].value;
      break;
    }
  }

  const output = document.getElementById('dataOutput');
  output.textContent = `Nombre: ${name}, Correo: ${email}, Edad: ${age}, Género: ${gender}, Fecha: ${dob}, Color: ${color}`;
}
