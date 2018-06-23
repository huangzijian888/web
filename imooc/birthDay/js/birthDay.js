//闰年2月29天 平年2月28天
//计算是否是闰年 闰年能被4整除 不能被100整除

function getDays() {
  var year, month, day, monthDays, i;
  year = prompt("请输入你出生年份");
  while (year.length != 4 || isNaN(year) == true) {
    year = prompt("出生年份输入错误,请输入四位数字出生年份!");
  }
  month = prompt("请输入你出生月份");
  while (month.length != 2 || isNaN(month) == true||month>12||month<1) {
    month = prompt("出生月份输入错误，请正确输入两位数字出生月份！");
  }
  day = prompt("请输入你出生日期");
  //闰年
  if (year % 100 != 0 && year % 4 == 0) {
    //不是一月出生
    if (month != 1) {
      monthDays = (month - 1) * 31 + parseInt(day);

      for (i = 1; i < month; i++) {
        if (i == 4 || i == 6 || i == 9 || i == 11) {
          monthDays -= 1;
        } else if (i == 2) {
          monthDays -= 2;
        }
      }
      return [year, monthDays];
    }
    //一月出生
    else if (month == 1) {
      monthDays = day;
      return [year, monthDays];
    }
  }
  //平年
  else {
    //   不是一月出生
    if (month != 1) {
      monthDays = (month - 1) * 31 + parseInt(day);

      for (i = 1; i < month; i++) {
        if (i == 4 || i == 6 || i == 9 || i == 11) {
          monthDays -= 1;
        } else if (i == 2) {
          monthDays -= 3;
        }
      }
      return [year, monthDays];
    }
    //一月出生
    else if (month == 1) {
      monthDays = day;
      return [year, monthDays];
    }
  }
}
var data = getDays();
alert("您的生日在" + data[0] + "年是第" + data[1] + "天");
