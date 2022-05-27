const display = document.querySelector('.display');
const operatorEl = document.querySelectorAll('.operator');
const numberEl = document.querySelectorAll('.num');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

function clear() {
      display.textContent = '0';
      MemoryCurrentNumber = 0;
      MemoryNewNumber = false;
      MemoryPendingOperation = '';
}
document.getElementById('clear').addEventListener('click', clear);

numberEl.forEach(num => {
      num.addEventListener('click', function (e) {
            numberPress(e.target.textContent);
      });
});

operatorEl.forEach(op => {
      op.addEventListener('click', function (e) {
            operation(e.target.textContent);
      });
});

function numberPress(number) {
      if (MemoryNewNumber) {
            display.textContent = number;
            MemoryNewNumber = false;
      } else {
            if (display.textContent === '0') {
                  display.textContent = number;
            } else {
                  display.textContent += number;
            };
      };
};

function operation(op) {
      let localOperationMemory = display.textContent;
      if (MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.textContent = MemoryCurrentNumber;
      } else {
            MemoryNewNumber = true;
            if (MemoryPendingOperation === '+') {
                  MemoryCurrentNumber += parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '-') {
                  MemoryCurrentNumber -= parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '*') {
                  MemoryCurrentNumber *= parseFloat(localOperationMemory);
            } else if (MemoryPendingOperation === '/') {
                  MemoryCurrentNumber /= parseFloat(localOperationMemory);
            } else {
                  MemoryCurrentNumber = parseFloat(localOperationMemory);
            };
            display.textContent = MemoryCurrentNumber;
            MemoryPendingOperation = op;
      };
};

function decimal() {
      let localDecimalMemory = display.textContent;
      if (MemoryNewNumber) {
          localDecimalMemory = '0.';
          MemoryNewNumber = false;
      } else {
          if (localDecimalMemory.indexOf('.') === -1) {
              localDecimalMemory += '.';
          }
      };
      display.textContent = localDecimalMemory;
  };