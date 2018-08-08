/*
Debouncing ensures that exactly one signal is sent for an event that may be happening several times.
Throttling restricts the frequency of calls that a function receives to a fixed time interval.
It is used to ensuring that the target function is not invoked more often than the specified delay.
*/

const debounce = function(f, ms) {
    let timer = null;

    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        };

        if (timer) {
            clearTimeout(timer);
        };

        timer = setTimeout(onComplete, ms);
    };
};


