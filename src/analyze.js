
function isFlush(hand) {
    const regex = /(.)(?<suit>.)((.)(\k<suit>)){4}/g;
    const matches = hand.match(regex);
    if (matches !== null) {
        return matches[0].charAt(1);
    } else {
        return null;
    }

}
module.exports.isFlush = isFlush;

function isStraight(hand) {
    const matches = hand.match(/(.)./gm);
    numbers = matches.map((elem) => {
        if (elem.charAt(0) === 'a') {
            return 14;
        } else if (elem.charAt(0) === 't') {
            return 10;
        } else if (elem.charAt(0) === 'j') {
            return 11;
        } else if (elem.charAt(0) === 'q') {
            return 12;
        } else if (elem.charAt(0) === 'k') {
            return 13;
        } else {
            return parseInt(elem.charAt(0));
        }
    });
    numbers.sort();
    at = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (at + 1 !== numbers[i]) {
            return null;
        }
        at = numbers[i];
    }
    return { start: numbers[0], end: numbers[4] };
}
module.exports.isStraight = isStraight;

function isStraightFlush(hand) {
    return isStraight(hand) && isFlush(hand);
}
module.exports.isStraightFlush = isStraightFlush;

function findPairs(hand) {
    const regex = /.[hdks]/gm;
    const matches = hand.match(regex);
    const out = matches.reduce((acc, curr) => {
        return acc[curr.charAt(0)] ? acc[curr.charAt(0)] += curr.charAt(1) : acc[curr.charAt(0)] = curr.charAt(1), acc
    }, {});
    console.log(out);
    console.log(matches);
    return out;
}
module.exports.findPairs = findPairs;


// hand: input string in style of 3h5d9sthak
// Does not do any special analysis for Full House, Straight Flush, etc.., since it it really easy to infer from the provided data.
function analyzeHand(hand) {
    if (hand.length !== 10) {
        return;
    }
    const out = {};
    const straight = isStraight(hand);
    if (straight) {
        out.straight = straight;
    }
    const flush = isFlush(hand);
    if (flush) {
        out.flush = flush;
    }
    out.pairs = findPairs(hand);

    return out;
}
module.exports.analyzeHand = analyzeHand;