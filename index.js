function isLeapYear(year){
  var divisibleBy4 = year % 4;
  var divisibleBy100 = year % 100;
  var divisibleBy400 = year % 400;

  if(divisibleBy4 === 0){
    if(divisibleBy100 === 0){
      if(divisibleBy400 === 0){
        return year+" is a Leap Year";
      }else {
        return year+" is not a Leap Year";
      }
    }else {
      return year+" is a Leap Year";
    } 
  }else {
    return year+" is not a Leap Year";
  }
}

isLeapYear(2000);