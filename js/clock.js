const clock = document.querySelector('h2#clock')

function showClock () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const h = String(currentDate.getHours()).padStart(2,'0');
    const m = String(currentDate.getMinutes()).padStart(2,'0');
    const s = String(currentDate.getSeconds()).padStart(2,'0');
    clock.innerHTML = `today is ${year}년 ${month}월 ${date}일<br>${h}:${m}:${s}`
}
showClock()
setInterval(showClock, 1000);