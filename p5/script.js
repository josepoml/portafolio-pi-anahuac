function procesarFormulario() {

  const txt = document.getElementById('txtNombre');
  const email = document.getElementById('txtEmail');
  const fecha = document.getElementById('dtFecha');
  const color = document.getElementById('clrColor');
  const rango = document.getElementById('rngNivel');
  const checks = document.querySelectorAll('input[name="chkOpcion"]:checked');
  const radio = document.querySelector('input[name="radNivel"]:checked');


  if (!txt.value.trim()) return alert("Error: El campo 'Texto' se encuentra vacío.");
  if (!email.value.trim()) return alert("Error: El campo 'Email' se encuentra vacío.");
  if (checks.length === 0) return alert("Error: Seleccione al menos una opción de 'Checkbox'.");
  if (!radio) return alert("Error: Seleccione una opción de 'Radio'.");
  if (!fecha.value) return alert("Error: El campo 'Fecha' se encuentra vacío.");


  const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
  const fila = tabla.insertRow();


  fila.insertCell(0).innerText = txt.value;
  fila.insertCell(1).innerText = email.value;


  const valChecks = Array.from(checks).map(c => c.value).join(', ');
  fila.insertCell(2).innerText = valChecks;

  fila.insertCell(3).innerText = radio.value;
  fila.insertCell(4).innerText = fecha.value.replace('T', ' ');


  const celdaColor = fila.insertCell(5);
  celdaColor.innerHTML = `<span class="color-preview" style="background-color: ${color.value}"></span>`;

  fila.insertCell(6).innerText = rango.value;


  document.getElementById('registroForm').reset();
}
