/* Since there are 52 unique cards in a standard deck of cards, 13 of each suit, for generation mapping suits to ranges of numbers in range 0..52.
    Heart:0..13
    Diamond: 13..26
    Clover: 26..39
    Spade: 39..52
*/
function randomInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

//Generate hand of cards mapped to int ranges
function genHand(size) {
    const arr = [];
    while (arr.length < size) {
        var card = randomInt(52);
        if (arr.indexOf(card) === -1) arr.push(card);
    }
    return arr;
}
module.exports.genHand = genHand;

function cardToString(card) {
    const suit = Math.floor(card / 13);
    const num = (card % 13) + 1;
    const out = "";

    switch (num) {
        case 1:
            out = "a";
            break;
        case 10:
            out = "t";
            break;
        case 11:
            out = "j";
            break;
        case 12:
            out = "q";
            break;
        case 13:
            out = "k";
            break;
        default:
            out = num.toString();
    }

    switch (suit) {
        case 0:
            out += "h";
            break;
        case 1:
            out += "d";
            break;
        case 2:
            out += "k";
            break;
        case 3:
            out += "s";
            break;
        default:
            break;
    }

    return out;
}
module.exports.cardToString = cardToString;