let time;
let date;
let a;

setInterval(() => {
    a = new Date();
    ampm =  (a.getHours() < 12) ? "AM" : "PM"
    time = (a.getHours()==24) ? (a.getHours() % 12) + 1 : (a.getHours() % 12) + " : " + a.getMinutes() + " : " + a.getSeconds() + " " +ampm;
    date = a.toLocaleDateString();
    document.getElementById("date").innerHTML = "Date : " + date;
    document.getElementById("time").innerHTML = "Time: " + time;
},1000);



