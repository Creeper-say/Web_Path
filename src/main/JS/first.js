function showDate() {
    document.getElementsByName("date")[0].innerHTML = new Date().toDateString();
    document.getElementsByName("date")[1].innerHTML = new Date().toLocaleTimeString();
}

document.write("<h1>Today's Date: <span name='date'></span></h1>");
document.write("<p><input type='button' value='Show Date' onclick='showDate()'></p>");
document.write("<h2>这是后加载的标题</h2>");

function changeContent() {
    // document.getElementById("demo").innerHTML = "Hello World";
    x=document.getElementById("demo");
    x.innerHTML = "Hello World";
}

function changeImg() {
    element=document.getElementById("myImg");
    if(element.src.match("2")) {
        element.src ="../../resources/Images/bulb.png";
    }
    else {
        element.src ="../../resources/Images/bulb-2.png";
    }
}

function changeStyle() {
    element=document.getElementById("myH1");
    element.style.color="#4f0087";
    element.style.fontSize="30px";
    element.style.backgroundColor="#f2f2f2";
}

function checkNumber() {
    var num = document.getElementById("numInput").value;
    console.log(num);
    if(num==""||isNaN(num))
    {
        alert("Please enter a valid number!");
    }
}

function showData() {
    window.alert(2+3-2*3/2);
}

document.write("<h3>在JavaScript中，NaN是一个特殊的值，用于表示非数字值</h3>")
document.write("<p>NaN与任何值都不相等，包括NaN本身</p>")
document.write("<p>	JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。</p>")

