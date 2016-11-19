 // header, footer

 $(".header").load("header.html")
 $(".footer").load("footer.html")

 // scrollup

 $(document).ready(function() {

     $(window).scroll(function() {
         if ($(this).scrollTop() > 100) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

     $('.scrollup').click(function() {
         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });

 });


 // lightbox

 function showLoginForm() {
     // document.getElementById("btnLogin").innerHTML == "登入";
     document.getElementsByClassName("lightbox")[0].style.display = "";
     // if (
     // } else {
     //     document.getElementById("memName").innerHTML = "&nbsp;";
     //     document.getElementById("spanLogin").innerHTML = "登入";
     //     document.getElementsByName("memId")[0].value;
     //     document.getElementsByName("memPsw")[0].value;
     // }
 } //showloginForm

 function sendForm() {
     var memId = document.getElementsByName("memId")[0].value;
     var memPsw = document.getElementsByName("memPsw")[0].value;
     if (memId != "Roma" || memPsw != "amor9121") {
         alert("帳密錯誤");
     } else { //登入成功
         document.getElementById("btnLogin").innerHTML = " <i class='fa fa-cog'></i>&nbsp;個人設定";
         document.getElementsByClassName("lightbox")[0].style.display = "none";
     }
 } //sendForm

 function cancelLogin() {
     document.getElementsByClassName("lightbox")[0].style.display = "none";
     // document.getElementsByName("memId")[0].value = "";
     // document.getElementsByName("memPsw")[0].value = "";
 }

 function init() {
     document.getElementById("btnLogin").onclick = showLoginForm;
     document.getElementById("submit").onclick = sendForm;
     document.getElementsByClassName("btn-close")[0].onclick = cancelLogin;
 } //init
 window.onload = init;


 //Load Tab

 function loadTab(obj, n) {

     var layer;
     eval('layer=\'S' + n + '\'');

     //將 Tab 標籤樣式設成 Blur 型態
     var tabsF = document.getElementsByClassName('title')[0].getElementsByTagName('li');
     for (var i = 0; i < tabsF.length; i++) {
         tabsF[i].setAttribute('class', null);
         eval('document.getElementById(\'S' + (i + 1) + '\').style.display=\'none\'')
     }

     //變更分頁標題樣式
     obj.parentNode.setAttribute('id', 'main');
     document.getElementById(layer).style.display = 'block';

 }

 function clearLinkDot() {
     var i, a, main;
     for (i = 0;
         (a = document.getElementsByTagName("a")[i]); i++) {
         if (a.getAttribute("onFocus") == null) {
             a.setAttribute("onFocus", "this.blur();");
         } else {
             a.setAttribute("onFocus", a.getAttribute("onFocus") + ";this.blur();");
         }
         a.setAttribute("hideFocus", "hidefocus");
     }
 }


 $(window).scroll(function() {
     var windistance = $(document.body).height();
     var offset_height = 0.399 * Number(windistance);
     var distance = $(window).scrollTop();

     if (distance > offset_height) {
         $('.taiwanPic1').addClass('taiwanPicShow1');
         $('.locat1').addClass('locatShow1');
         $('.font1').addClass('fontShow1');
         $('.taiwanImg').addClass('taiwanImgShow1');

     } else {
         $('.taiwanPic1').removeClass('taiwanPicShow1');
         $('.locat1').removeClass('locatShow1');
         $('.font1').removeClass('fontShow1');
         $('.taiwanImg').removeClass('taiwanImgShow1');
     }
     console.log(windistance);
     console.log(offset_height);


 });
