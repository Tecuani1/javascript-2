function getZodiacSign(birthdayString) {
    // Crear un objeto Date a partir del string
    const date = new Date(birthdayString);
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
        return "Fecha invalida";
    }

    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Acuario";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisis";
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Tauro";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Geminis";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpion";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitario";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricornio";
    else return "Fecha invalida";
}

function getZodiacSignSwitch(birthdayString) {
    const date = new Date(birthdayString);

    if (isNaN(date.getTime())) {
        return "Fecha invalida";
    }

    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;

    switch (month) {
        case 1:
            return day >= 20 ? "Acuario" : "Capricornio";
        case 2:
            return day <= 18 ? "Acuario" : "Pisis";
        case 3:
            return day <= 20 ? "Pisis" : "Aries";
        case 4:
            return day <= 19 ? "Aries" : "Tauro";
        case 5:
            return day <= 20 ? "Tauro" : "Geminis";
        case 6:
            return day <= 20 ? "Geminis" : "Cancer";
        case 7:
            return day <= 22 ? "Cancer" : "Leo";
        case 8:
            return day <= 22 ? "Leo" : "Virgo";
        case 9:
            return day <= 22 ? "Virgo" : "Libra";
        case 10:
            return day <= 22 ? "Libra" : "Escorpion";
        case 11:
            return day <= 21 ? "Escorpion" : "Sagitario";
        case 12:
            return day <= 21 ? "Sagitario" : "Capricornio";
        default:
            return "Fecha invalida";
    }
}

function generateMessages(array) {
    return array.map(person => {
        const signIfElse = getZodiacSign(person.birthday);
        const signSwitch = getZodiacSignSwitch(person.birthday);
        if (signIfElse === "Fecha invalida" || signSwitch === "Fecha invalida") {
            return `${person.name} tiene una fecha de nacimiento inválida`;
        }
        return `${person.name} es ${signIfElse} con (if-else) ${person.name} es ${signSwitch} con (switch)`;
    });
}

const people = [
    { name: 'Danielle', birthday: '2020-12-19' },
    { name: 'Juan', birthday: '1990-05-15' },
    { name: 'Paulina', birthday: '1985-08-20' },
    { name: 'Jesus', birthday: '2000-03-30' },
    { name: 'Laura', birthday: '1975-01-10' },
    { name: 'Pedrito', birthday: 'asd' } //valor  incorrecto
];

const messages = generateMessages(people);
console.log(messages);

