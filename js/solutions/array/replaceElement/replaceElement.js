function replaceElement(list, prevValue, value) {
    const indexOfPrevValue = list.indexOf(prevValue);

    if (indexOfPrevValue >= 0) {
        list[indexOfPrevValue] = value;
        return list
    }
    return list
}

module.exports = replaceElement;