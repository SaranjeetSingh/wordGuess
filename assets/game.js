var winNumber=0;
var possible = ['apple','banana','mango','grapes','kiwi','strawberry','peach','cherry'];
var randomText;
var guesses;
var guess;

function start(){
    guesses="";
    var para2="";
    guess = 10;
    randomText = possible[Math.floor(Math.random() * possible.length)];
    // console.log(randomText);
    var para2Span = document.getElementById("para2");
    var guessRemaining = document.getElementById("guess");
    var guessesSpan = document.getElementById("guesses");
    guessesSpan.textContent = guesses;

    for(i=0; i<randomText.length; i++){
        para2 = para2 + "-";
    }
    para2Span.textContent = para2;
    guessRemaining.textContent = guess;
}

document.onkeyup = function(event){
    var para2Span = document.getElementById("para2");
    var winNumberSpan = document.getElementById("paragraph");
    var guessesSpan = document.getElementById("guesses");
    var guessRemaining = document.getElementById("guess");
    
    var text = para2Span.textContent;
    var keyPressed = event.key;

    if(text.indexOf(keyPressed) != -1 || guesses.indexOf(keyPressed) != -1){
        return;
    }
    else{
        guess--;
        guessRemaining.textContent = guess;
        if(guess == 0){
            start();
            return;
        }
    }
    guesses = guesses + keyPressed +"," ;
    guessesSpan.textContent = guesses;

    for(i=0; i<randomText.length; i++){
        var subStr1 = randomText.substr(i, 1);
        if(subStr1 == keyPressed){
            text = text.replaceAt(i, keyPressed);
            // console.log(text);
        }
    }
    para2Span.textContent = text;
    if(randomText == text){
        winNumber = winNumber+1;
        winNumberSpan.textContent = winNumber;
        if(text == "apple"){
            document.getElementById('myImage').src='assets/apple.jpg';
        }
        else if(text == "banana"){
            document.getElementById('myImage').src='assets/banana.jpg';
        }
        else if(text == "peach"){
            document.getElementById('myImage').src='assets/peach.jpg';
        }
        else if(text == "mango"){
            document.getElementById('myImage').src='assets/mango.jpg';
        }
        else if(text == "grapes"){
            document.getElementById('myImage').src='assets/grapes.jpg';
        }
        else if(text == "strawberry"){
            document.getElementById('myImage').src='assets/strawberry.jpg';
        }
        else if(text == "kiwi"){
            document.getElementById('myImage').src='assets/kiwi.jpg';
        }
        else if(text == "cherry"){
            document.getElementById('myImage').src='assets/cherry.jpg';
        }
        start();
    }

}

String.prototype.replaceAt=function(index, replacement) {
    // var temp = this;
    // var length = temp.length;
    var substr1 = this.substr(0,index);
    var substr2 = this.substr(index+1, this.length);
    return substr1 + replacement+ substr2;
}