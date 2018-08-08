let timer = null;

const setIntervalCustom = (func, interval) => {
    timer = setTimeout(() => {
        if (interval) {
            func();
            setIntervalCustom(func, interval)
        }
    }, interval)
}

let numb = 0;
const autocomplete = () => {
    numb++;
    console.log("[Client debug] autocomplete", numb)
}

const clearIntervalCustom = () => {
    setTimeout(() => clearTimeout(timer), 100)
}

setIntervalCustom(autocomplete, 10)
clearIntervalCustom();

