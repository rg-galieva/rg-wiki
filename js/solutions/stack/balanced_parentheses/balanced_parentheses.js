/*
Create a function that will evaluate if a given expression
has balanced parentheses -- Using stacks

In this example, we will only consider "{}" as valid parentheses
{}{} would be considered balancing.
{{{}} is not balanced
 */

function balanced_parentheses(data) {
    const stack = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === '{') {
            stack.push(data[i]);
        } else if (data[i] === '}') {
            const match = stack.pop();
            if (!match) return false;
        }
    }

    return !stack.pop();
}


module.exports = balanced_parentheses;