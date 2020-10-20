function simpleNumber (number){
  if (number === 0){
      return 'zero';
  }
  if (number === 1){
      return 'one';
  }
  if (number === 2){
      return 'two';
  }
  if (number === 3){
      return 'three';
  }
  if (number === 4){
      return 'four';
  }
  if (number === 5){
      return 'five';
  }
  if (number === 6){
      return 'six';
  }
  if (number === 7){
      return 'seven';
  }
  if (number === 8){
      return 'eight';
  }
  if (number === 9){
    return 'nine';
  }
}

function doubleNumber (number){
    if (number === 10){
        return 'ten';
    }
    if (number === 11){
        return 'eleven';
    }
    if (number === 12){
        return 'twelve';
    }
    if (number === 13){
        return 'thirteen';
    }
    if (number === 14){
        return 'fourteen';
    }
    if (number === 15){
        return 'fifteen';
    }
    if (number === 16){
        return 'sixteen';
    }
    if (number === 17){
        return 'seventeen';
    }
    if (number === 18){
      return 'eighteen';
    }
    if (number === 19){
        return 'nineteen';
      }
    if (number === 20){
        return 'twenty';
    }
    if (number === 30){
        return 'thirty';
    }
    if (number === 40){
        return 'forty';
    }
    if (number === 50){
        return 'fifty';
    }
    if (number === 60){
        return 'sixty';
    }
    if (number === 70){
        return 'seventy';
    }
    if (number === 80){
        return 'eighty';
    }
    if (number === 90){
      return 'ninety';
    }
  }

function twoDigit(number){
    if (number < 10){
        let answer = simpleNumber(number);
        return answer;
    }
    if (number <= 20 || number % 10 === 0){
        let answer = doubleNumber(number);
        return answer;
    }
    if (number < 100){
        let answer = doubleNumber(number - number % 10) + ' ' + simpleNumber(number % 10);
        return answer;
    }
}

module.exports = function toReadable (number) {
    if (number < 100){
        return twoDigit(number);
    }
    if (number % 100 === 0){
        let answer = simpleNumber(Math.floor(number / 100)) + ' hundred';
        return answer;
    }
    let answer = simpleNumber(Math.floor(number / 100)) + ' hundred ' + twoDigit(number % 100);
    return answer;
}
