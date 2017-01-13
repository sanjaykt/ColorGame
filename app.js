/**
 * Created by Sanjay on 2017-01-10.
 */
function generateColor() {
    var randomNum =[];
    for(var i = 0; i < 3; i++) {
        randomNum[i] = Math.floor((Math.random() * 255 + 1));
    }
    var r = randomNum[0];
    var g = randomNum[1];
    var b = randomNum[2];
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

console.log(generateColor());