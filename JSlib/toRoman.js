//以下是阿拉伯数字转换成罗马数字的函数
//创建于2017-5-9

function ToRoman(num) {
  var str = num.toString();
  var len = str.length;
  var roman = "";
  /*
  i指位数，0为个位，1为十位；
  index指i位在str中的索引；
  */
  for(var i=0; i<len; i++){
    var index = len-i-1;
    switch(str[index]){
      case "0":
        break;
      case "1":
        if(i === 0){
          roman = "I" + roman;
        }else if(i === 1){
          roman = "X" + roman;
        }else if(i === 2){
          roman = "C" + roman;
        }else if(i === 3){
          roman = "M" + roman;
        }
        break;
      case "2":
        if(i === 0){
          roman = "II" + roman;
        }else if(i === 1){
          roman = "XX" + roman;
        }else if(i === 2){
          roman = "CC" + roman;
        }else if(i === 3){
          roman = "MM" + roman;
        }
        break;
      case "3":
        if(i === 0){
          roman = "III" + roman;
        }else if(i === 1){
          roman = "XXX" + roman;
        }else if(i === 2){
          roman = "CCC" + roman;
        }else if(i === 3){
          roman = "MMM" + roman;
        }
        break;
      case "4":
        if(i === 0){
          roman = "IV" + roman;
        }else if(i === 1){
          roman = "XL" + roman;
        }else if(i === 2){
          roman = "CD" + roman;
        }
        break;
      case "5":
        if(i === 0){
          roman = "V" + roman;
        }else if(i === 1){
          roman = "L" + roman;
        }else if(i === 2){
          roman = "D" + roman;
        }
        break;
      case "6":
        if(i === 0){
          roman = "VI" + roman;
        }else if(i === 1){
          roman = "LX" + roman;
        }else if(i === 2){
          roman = "DC" + roman;
        }
        break;
      case "7":
        if(i === 0){
          roman = "VII" + roman;
        }else if(i === 1){
          roman = "LXX" + roman;
        }else if(i === 2){
          roman = "DCC" + roman;
        }
        break;
      case "8":
        if(i === 0){
          roman = "VIII" + roman;
        }else if(i === 1){
          roman = "LXXX" + roman;
        }else if(i === 2){
          roman = "DCCC" + roman;
        }
        break;
      case "9":
        if(i === 0){
          roman = "IX" + roman;
        }else if(i === 1){
          roman = "XC" + roman;
        }else if(i === 2){
          roman = "CM" + roman;
        }
        break;
    }
  }
  return roman;
}