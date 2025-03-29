function createCounter(init) {
    let currentValue = init;

    return {
        increment: function() {
            
            currentValue += 1;
            return currentValue;
        },
        decrement: function() {
            currentValue -= 1;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const counter = createCounter(0);
    const display = document.getElementById('display');

    document.getElementById('increment').addEventListener('click', () => {
        display.textContent = counter.increment();
    });

    document.getElementById('decrement').addEventListener('click', () => {
        display.textContent = counter.decrement();
    });

    document.getElementById('reset').addEventListener('click', () => {
        display.textContent = counter.reset();
    });
});

