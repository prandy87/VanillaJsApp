var ourArray = [
    ["the universe", 42],
    ["nothing", 0],
    [45, "so fucking easy", 565882340]
];
ourArray.push(["fuck", "it"]);
console.log(ourArray)

// access in array of array double []

function isLess(a, b) {
    return a <= b;
}

console.log(isLess(15, 15));

function abTest(a, b) {
    if (a < 0 || b < 0)
        return undefined;
}

console.log(abTest(-2, 2));

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }
    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var array = [];

for (var i = 0; i < 10; i += 2) {
    array.push(i);
}

console.log(array);