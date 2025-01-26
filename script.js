const resultInput = document.getElementById('result');

function appendValue(value) {
  resultInput.value += value;
}

function clearDisplay() {
  resultInput.value = '';
}

function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch {
    resultInput.value = 'Error';
  }
}
