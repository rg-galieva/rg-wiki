// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let result = '';
//
//         for (let column = 0; column < n; column++) {
//             if (row >= column) {
//                 result += '#'
//             } else {
//                 result += ' ';
//             }
//         }
//
//         console.log(result)
//     }
// }


function steps(n, row = 0, result = '') {
    if (row === n) return;

    const column = result.length;

    if (n === column) {
        console.log(result);
        return steps(n, row + 1, '')
    }

    if (row >= column) {
        result += '#'
    } else {
        result += ' ';
    }

    steps(n, row, result);
}

module.exports = steps