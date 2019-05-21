// var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName);
    return ("Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.");
}
function nowServing(katzDeliLine) {
    if (katzDeliLine[0] === undefined) {
        return "There is nobody waiting to be served!";
    } else {
    return ("Currently serving " + katzDeliLine.shift() + ".");
    }
}
// condition 1: no line ==> "The line is currently empty."
// condition 2: first name ==> (index + 1) + ". " + (index)
// condition 3: middle names ==> ", " + (index + 1) + ". " + (index)
// condition 4: last name ==> ", " + (index + 1) + ". " + (index)
// condition 3 = condition 4
function currentLine(line) {
    if (line[0] === undefined) { //empty array
        return "The line is currently empty.";
    }
    var lineText = "The line is currently: ";
    lineText = (lineText + (1) + ". " + line[0]); //first name
    for ( var i = 1 ; i < line.length ; ++i ) { 
        lineText = (lineText + ", " + (i + 1) + ". " + line[i]);
    }
    return lineText;
}
