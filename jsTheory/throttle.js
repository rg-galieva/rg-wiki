// make sure that only one signal will be sent for event that may be happening several times

const debounce = (func, ms) => {
    let timer = null;
console.log("[Client debug] arguments", arguments)
    return function (...arguments) {
        timer = setTimeout(() => {
            return func.apply(this, arguments)
        }, ms)
    }
}


const autocomplete = () => {
    console.log("[Client debug] autocomplete", )
}