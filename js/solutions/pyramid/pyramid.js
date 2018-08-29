// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const columnsMax = 2 * n - 1;
//     const midPoint = Math.floor(columnsMax / 2);
//
//     for (let row = 0; row < n; row++) {
//         let result = '';
//
//         for (let column = 0; column < columnsMax; column++) {
//             if (column >= midPoint - row && column <= midPoint + row) {
//                 result += '#';
//             } else {
//                 result += ' ';
//             }
//         }
//
//         console.log(result);
//     }
// }


function pyramid(n, row = 0, result = '') {
    if (row === n) return;

    const columnsMax = 2 * n - 1;
    const midPoint = Math.floor(columnsMax / 2);
    const column = result.length;

    if (column === columnsMax) {
        console.log(result)
        return pyramid(n, row + 1);
    }

    let add;

    if (midPoint - row <= column && midPoint + row >= column) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, result + add)
}

module.exports = pyramid;
