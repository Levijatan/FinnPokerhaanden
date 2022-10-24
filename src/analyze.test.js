const analyze = require('./analyze');

test('checks if 4h5h6h7h8h is Flush', () => {
    expect(analyze.isFlush("4h5h6h7h8h")).toStrictEqual("h");
});

test('checks if 4h5d6k7h8h is Flush', () => {
    expect(analyze.isFlush("4h5d6k7h8s")).toBe(null);
});

test('checks if 4h5d6k7h8h is straight', () => {
    expect(analyze.isStraight("4h5d6k7h8h")).toStrictEqual({ "end": 8, "start": 4 });
});

test('checks if 3h5d6k7h8h is straight', () => {
    expect(analyze.isStraight("3h5d6k7h8h")).toBe(null);
});

test('checks if thjdqkkhah is straight', () => {
    expect(analyze.isStraight("thjdqkkhah")).toStrictEqual({ "end": 14, "start": 10 });
});

test('checks how many pairs inn 4h3k4k4d3h', () => {
    const obj = {};
    obj["3"] = "kh";
    obj["4"] = "hkd";
    expect(analyze.findPairs("4h3k4k4d3h")).toStrictEqual(obj);
});