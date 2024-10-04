export function dateTime(){

    const date = document.createElement('p');
    date.id ='dateTime';
    const weekday = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);

    date.innerText = 
    `${weekdayCapitalized} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute:'numeric'})}`
    return date;
}