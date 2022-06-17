let userName = prompt("Kullanıcı Adını Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = userName



 function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds();
    var d = date.getDay();
    switch (d) {
        case 1:
            var day = "Pazartesi"
            break;
        case 2:
            var day = "Salı"
            break;
        case 3:
            var day = "Çarşamba"
            break;
        case 4:
            var day = "Perşembe"
            break;
        case 5:
            var day = "Cuma"
            break;
        case 6:
            var day = "Cumartesi"
            break;
        case 7:
            var day = "Pazar"
            break;
    
        default:
            break;
    }

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
