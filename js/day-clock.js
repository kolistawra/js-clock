let userName = prompt("Kullanıcı Adınızı Giriniz :");
let user = document.querySelector(".user");
user.innerHTML = userName;

// Clock

setInterval(() => { 
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    let day = weekday[date.getDay()]
    let time = document.querySelector (".p2")
    time.innerHTML = `${hour} : ${minute} : ${second}   ${day} `
    } , 1000)

