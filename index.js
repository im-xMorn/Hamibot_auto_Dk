// 唤醒屏幕
device.wakeUp();
sleep(1000);
// 上滑
swipe(369, 1222, 342, 308, 400)
// 解锁
var pwds = "xxxx"; // 锁屏密码
for(var i = 0; i < 4; i++)
{
  sleep(500)
  switch(pwds[i]-0){
    case 1:
      press(357,1172,100);
      break;
    case 2:
      press(357,1172,100);
      break;
    case 3:
      press(357,1172,100);
      break;
    case 4:
      press(357,1172,100);
      break;
    case 5:
      press(357,1172,100);
      break;
    case 0:
      press(359,1424,100);
      break;
    default:
      toast("密码输入有误程序中断");
      exit();
  }
}
sleep(2000)
home()
sleep(2000)
home()
sleep(2000)
// 打开微信app
className("android.widget.TextView").text("微信").findOne().click()
sleep(10000)
// 下滑
swipe(400, 308, 400, 1222,400)
click('重庆校')
sleep(3000)
// 判断是否登录
var is_login = className("android.view.View").text("自查").findOne()
if (is_login == null){
     className("android.view.View").text("登录").findOne().click()
     sleep(3000)
}
// 自查按钮
className("android.view.View").text("自查").findOne().click()

// 打卡按钮
sleep(10000)
text("打卡").click()
sleep(3000)
// 返回主界面
home()
alert('今日打卡已完成!');
