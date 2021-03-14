module.exports = function toReadable (number) {
  let arrNumb = [];
  let arrStr = [];
  arrNumb = (number + '').split('');

  for (let i = 0; i < arrNumb.length; i++) {

    if(i == arrNumb.length -1) {
        if(arrNumb[i] == 0 && arrNumb.length == 1) arrStr[i] = "zero"; 
        else if(arrNumb[i] == 1) arrStr[i] = "one";
        else if(arrNumb[i] == 2) arrStr[i] = "two";
        else if(arrNumb[i] == 3) arrStr[i] = "three";
        else if(arrNumb[i] == 4) arrStr[i] = "four";
        else if(arrNumb[i] == 5) arrStr[i] = "five";
        else if(arrNumb[i] == 6) arrStr[i] = "six";
        else if(arrNumb[i] == 7) arrStr[i] = "seven";
        else if(arrNumb[i] == 8) arrStr[i] = "eight";
        else if(arrNumb[i] == 9) arrStr[i] = "nine";
    }

    else if(i == arrNumb.length -2) {
        if(arrNumb[i] == 1 && arrNumb[i+1] == 0) {arrStr[i] = "ten";    arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 1) {arrStr[i] = "eleven";    arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 2) {arrStr[i] = "twelve";    arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 3) {arrStr[i] = "thirteen";  arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 4) {arrStr[i] = "fourteen";  arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 5) {arrStr[i] = "fifteen";   arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 6) {arrStr[i] = "sixteen";   arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 7) {arrStr[i] = "seventeen"; arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 8) {arrStr[i] = "eighteen";  arrNumb[i+1] = '';}
        else if(arrNumb[i] == 1 && arrNumb[i+1] == 9) {arrStr[i] = "nineteen";  arrNumb[i+1] = '';}
        else if(arrNumb[i] == 2) {arrStr[i] = "twenty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 3) {arrStr[i] = "thirty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 4) {arrStr[i] = "forty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 5) {arrStr[i] = "fifty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 6) {arrStr[i] = "sixty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 7) {arrStr[i] = "seventy"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 8) {arrStr[i] = "eighty"; if (number%10 != 0) arrStr[i] += ' ';}
        else if(arrNumb[i] == 9) {arrStr[i] = "ninety"; if (number%10 != 0) arrStr[i] += ' ';}
    }

    else if(i == arrNumb.length -3) {
        if(arrNumb[i] == 1) arrStr[i] = "one hundred";
        else if(arrNumb[i] == 2) arrStr[i] = "two hundred";
        else if(arrNumb[i] == 3) arrStr[i] = "three hundred";
        else if(arrNumb[i] == 4) arrStr[i] = "four hundred";
        else if(arrNumb[i] == 5) arrStr[i] = "five hundred";
        else if(arrNumb[i] == 6) arrStr[i] = "six hundred";
        else if(arrNumb[i] == 7) arrStr[i] = "seven hundred";
        else if(arrNumb[i] == 8) arrStr[i] = "eight hundred";
        else if(arrNumb[i] == 9) arrStr[i] = "nine hundred";
        if (number%100 != 0) arrStr[i] += ' ';
    }
  }
  
  return arrStr.join('');
}
