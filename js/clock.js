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
    const today = clock.querySelector('span:first-child');
    const time = clock.querySelector('span:last-child');
    today.innerText = `${year}년 ${month}월 ${date}일`
    time.innerText = `${h}:${m}`
}
showClock()
setInterval(showClock, 1000);