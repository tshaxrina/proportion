let car = {
    total: +prompt("Всего отправлено"),
    broken: +prompt("Сколько % бракованные"),
} 
function proportion(data) {
    let returned = alert("Бракованных: " + data.total * data.broken/100)
}

proportion(car)
console.log(car);


