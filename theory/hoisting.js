/*
Variable assignment takes precedence over function declaration
Function declarations take precedence over variable declarations

variable hoisting: The JavaScript engine treats all variable declarations using “var” as if they
are declared at the top of a functional scope(if declared inside a function) or
global scope(if declared outside of a function) regardless of where the actual declaration occurs.
This essentially is “hoisting”.


Выполнение скрипта происходит в две фазы
- На первой фазе происходит инициализация, подготовка к запуску.
Во время инициализации скрипт сканируется на предмет объявления функций вида Function Declaration,
а затем – на предмет объявления переменных var. Каждое такое объявление добавляется в window.

Функции, объявленные как Function Declaration, создаются сразу работающими, а переменные – равными undefined.
На второй фазе – собственно, выполнение.

Присваивание (=) значений переменных происходит, когда поток выполнения доходит до соответствующей строчки кода, до этого они undefined.

На момент инициализации, до выполнения кода:

// window = { f: function, a: undefined, g: undefined }
var a = 5;
// window = { f: function, a: 5, g: undefined }

function f(arg) { }
// window = { f: function, a: 5, g: undefined } без изменений, f обработана ранее

var g = function(arg) {  };
// window = { f: function, a: 5, g: function }
*/


// window = { b: function, a: undefined }
var a = 1;

function b() {
// a hoisted
    a = 10;
    return;

    function a() {
    }
}

b();
console.log(a);

function foo() {
    function bar() {
        return 3;
    }

    return bar();

    function bar() {
        return 8;
    }
}

alert(foo()); // 8


function parent() {
// hoisted() func
    var hoisted = "I'm a variable";

    function hoisted() {
        return "I'm a function";
    }

    return hoisted();
}

console.log(parent()); // error


alert(foo()); // 3
function foo() {
    var bar = function () {
        return 3;
    };
    return bar();
    var bar = function () {
        return 8;
    };
}
