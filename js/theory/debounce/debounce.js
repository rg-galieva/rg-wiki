/*
Debouncing ensures that exactly one signal is sent for an event that may be happening several times.
Throttling restricts the frequency of calls that a function receives to a fixed time interval.
It is used to ensuring that the target function is not invoked more often than the specified delay.
*/

const debounce = (fn, delay) => {
    let timeout;

    return function () {
        const functionCall = () => fn.apply(this, arguments);

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(functionCall, delay);
    }
}

const handleInputChange = (event) => {
    const value = event.target.value;
    const result = Math.pow(Number(value), 2);
    document.getElementById('result').innerText = result.toString();
}

const debounced = debounce(handleInputChange, 200);
document.getElementsByTagName('input')[0].addEventListener('keyup', debounced)