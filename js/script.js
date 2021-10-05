const question = `Что вы хотите сделать?    (add - суммировать, 
sub - отнять, mult - умножить, div - разделить)`;
const result = prompt(`${question}`, `add`);
let firstNum;
let secondNum;
if ( result === `add` ) {
    firstNum = Number(prompt(`Введите первое число`));
    secondNum = Number(prompt(`Введите второе число`));
    let add = firstNum + secondNum;
    alert(`Результат сложения : ${firstNum} + ${secondNum} = ${add}`);
} else if ( result === `sub` ) {
    firstNum = Number(prompt(`Введите первое число`));
    secondNum = Number(prompt(`Введите второе число`));
    let sub = firstNum - secondNum;
    alert(`Результат вычитания : ${firstNum} - ${secondNum} = ${sub}`);
} else if ( result === `mult` ) {
    firstNum = Number(prompt(`Введите первое число`));
    secondNum = Number(prompt(`Введите второе число`));
    let mult  = firstNum * secondNum;
    alert(`Результат умножения : ${firstNum} * ${secondNum} = ${mult}`);
} else if ( result === `div` ) {
    firstNum = Number(prompt(`Введите первое число`));
    secondNum = Number(prompt(`Введите второе число`));
    let div  = firstNum / secondNum;
    alert(`Результат деления : ${firstNum} / ${secondNum} = ${div}`);
} else if ( result === null ) {
    alert(`Отмена`);
} else {
    alert(`Запрос введен неправильно`);
}
