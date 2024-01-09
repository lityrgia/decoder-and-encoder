let uniCode = {
    "a": "+",
    "b": "-",
    "c": "_",
    "d": "/",
    "e": "]",
    "f": "*",
    "g": "@",
    "h": "%",
    "i": "^",
    "j": ")",
    "k": ".",
    "l": "{",
    "m": "|",
    "n": "!",
    "o": "$",
    "p": "=",
    "q": "&",
    "r": '"',
    "s": ",",
    "t": "'",
    "u": ";",
    "v": "#",
    "w": "~",
    "y": "[",
    "z": "`",
    " ": "?",
}

let uniCodeReverse = {
    "!": "n",
    '"': "r",
    "#": "v",
    "$": "o",
    "%": "h",
    "&": "q",
    "'": "t",
    ")": "j",
    "*": "f",
    "+": "a",
    ",": "s",
    "-": "b",
    ".": "k",
    "/": "d",
    ";": "u",
    "]": "e",
    "=": "p",
    "?": " ",
    "@": "g",
    "[": "y",
    "^": "i",
    "_": "c",
    "`": "z",
    "{": "l",
    "|": "m",
    "~": "w",
}

const htmlDecode = document.querySelector(".first")
const htmlEncode = document.querySelector(".second")

let resultDecode = "";

function decode(str) {
    for (let i = 0; i < str.length; i++) {
        if (uniCode[str[i].toLowerCase()] == undefined) {
            resultDecode += str[i]
        } else {
            resultDecode += uniCode[str[i].toLowerCase()]
        }
    }
}

let resultEncode = "";

function encode(str) {
    for (let i = 0; i < str.length; i++) {
        resultEncode += uniCodeReverse[str[i].toLowerCase()]
    }
}

document.querySelector(".decode").onclick = function () {
    resultDecode = "";
    let str = prompt("Accept only letters")
    decode(str)
    htmlDecode.innerHTML = resultDecode
}

document.querySelector(".encode").onclick = function () {
    resultEncode = "";
    let str = prompt("Accept only letters")
    encode(str)
    htmlEncode.innerHTML = resultEncode
}