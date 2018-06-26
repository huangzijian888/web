/* 输入函数 
 * 年份长度限制为4 类型限制为数字
 * 月份长度限制为2 类型限制为数字 输入范围限制为1-12 
 * 日期长度限制为2 类型限制为数字 输入范围限制为1-31
 * 
 * BUG 未根据用户输入的年份、月份对日期作出限制 后期需修复！
 */
function inputDate() {
  var year, month, day;
  year = prompt("请输入你出生年份");
  while (year.length != 4 || isNaN(year) == true) {
    year = prompt("出生年份输入错误,请输入四位数字出生年份!");
  }
  month = prompt("请输入你出生月份");
  while (month.length != 2 || isNaN(month) == true || month > 12 || month < 1) {
    month = prompt("出生月份输入错误，请正确输入两位数字出生月份！");
  }
  day = prompt("请输入你出生日期");
  while (day.length != 2 || isNaN(day) == true || day < 0 || day > 31) {
    day = prompt("出生日期输入错误，请正确输入两位数字出生日期");
  }
  return [year, month, day];
}

/* 闰年判断函数 
 * 闰年返回值为1
 * 平年返回值为0
 */
function runNian(a) {
  var year = a;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return 1;
  } else {
    return 0;
  }
}

/* 日期计算函数
 * 处理流程
 *  1.调用输入函数接收用户输入
 *  2.调用闰年判断函数判断输入年份是否为闰年
 *    i.判断月份是否为一月
 *      a.一月
 *          出生日期即为所求
 *      b.非一月
 *        ∙假设每个月31天 计算出天数
 *        ∙根据实际情况排除假设造成的误差
 */
function getDays() {
  var year, month, day, monthDays, i, dataReceive;
  dataReceive = inputDate();
  year = dataReceive[0];
  month = dataReceive[1];
  day = dataReceive[2];
  if (runNian(year)) {
    /* 不是一月出生 */
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
    } else if (month == 1) {
      /* 一月出生 */
      monthDays = day;
      return [year, monthDays];
    }
  } else {
    /* 平年 */
    /* 不是一月出生*/
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
    } else if (month == 1) {
      /* 一月出生 */
      monthDays = day;
      return [year, monthDays];
    }
  }
}
var data = getDays();
alert("您的生日在" + data[0] + "年是第" + data[1] + "天");
