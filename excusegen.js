window.onload = () => {
    document.querySelector('#excuse').innerHTML = excusegen();
}

let excusegen = () => {
    let pronoun = ['a', 'my', 'your', 'the'];
    let subject = ['dog', 'biker', 'truck', 'friend'];
    let action = ['ate', 'burnt', 'stole', 'broke'];
    let item = ['my homework', 'my car', 'my house', 'my bike'];
    let place = ['at the mall.', 'at school.', 'at the bank.', 'at the airport.'];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subIndex = Math.floor(Math.random() * subject.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let itIndex = Math.floor(Math.random() * item.length);
    let plaIndex = Math.floor(Math.random() * place.length);

    return pronoun[proIndex] + ' ' + subject[subIndex] + ' ' + action[actIndex] + ' ' + item[itIndex] + ' ' + place[plaIndex]
}