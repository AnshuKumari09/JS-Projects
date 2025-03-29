function map(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
}

const plusOne = function(n) { return n + 1; };
const plusI = function(n, i) { return n + i; };
const constant = function() { return 42; };

document.getElementById('transformButton').addEventListener('click', () => {
    const arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
    const transformation = document.getElementById('transformation').value;

    let transformedArray = [];

    if (transformation === 'plusOne') {
        transformedArray = map(arrayInput, plusOne);
    } else if (transformation === 'plusI') {
        transformedArray = map(arrayInput, plusI);
    } else if (transformation === 'constant') {
        transformedArray = map(arrayInput, constant);
    }

    document.getElementById('output').textContent = transformedArray.join(', ');
});
