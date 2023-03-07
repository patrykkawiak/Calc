const allBtns = document.querySelectorAll('button');
const output = document.querySelector('.output-current');
const outputPrev = document.querySelector('.output-prev');
const btns = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]')
const clear = document.querySelector('[data-ope="c"]');
const plus = document.querySelector('[data-operation="+"]');
const minus = document.querySelector('[data-operation="-"]');
const razy = document.querySelector('[data-operation="*"]');
const podziel = document.querySelector('[data-operation="/"]');
const execute = document.querySelector('[data-ope="="]');
const history = document.querySelector('.history2');
const delBtn = document.querySelector('.delete-history');

let resultat;
let current_value = [];
let operation;
let oldValue;
const checkBtn = (e) => {
    current_value += e.target.dataset.number;
    output.textContent = current_value;
    operations.forEach(ope => ope.addEventListener('click', checkOperation))


}

const checkOperation = (e) => {
    operation = e.target.dataset.operation;
    operate();

}




const operate = () => {
    if (resultat) {

        if (current_value === '') {
            oldValue = resultat;
        } else {
            oldValue = current_value;
        }

    } else if (!resultat) {
        oldValue = current_value;
    }

    outputPrev.style.visibility = "visible";
    outputPrev.textContent = `${oldValue}  ${operation}`;
    current_value = [];
    output.textContent = current_value;
}



const showResult = () => {

    if(oldValue.value !== '' || current_value.value !== '' || resultat !== '') {
        switch (operation) {

            case '+':
                resultat = parseFloat(oldValue) + parseFloat(current_value);
                output.textContent = resultat;
    
                outputPrev.textContent = `${oldValue} ${operation} ${current_value} =`;
                break
            case '-':
                resultat = parseFloat(oldValue) - parseFloat(current_value);
                output.textContent = resultat;
    
                outputPrev.textContent = `${oldValue} ${operation} ${current_value} =`;
                break
            case '*':
                resultat = parseFloat(oldValue) * parseFloat(current_value);
                output.textContent = resultat;
    
                outputPrev.textContent = `${oldValue} ${operation} ${current_value} =`;
                break
            case '/':
                resultat = parseFloat(oldValue) / parseFloat(current_value);
                output.textContent = resultat;
    
                outputPrev.textContent = `${oldValue} ${operation} ${current_value} =`;
                break
    
        }
        
            const p = document.createElement('p');
            p.textContent = `${oldValue} ${operation} ${current_value} = ${resultat}`;
            history.append(p);
            current_value = '';
    }



}




btns.forEach(btn => btn.addEventListener('click', checkBtn))
execute.addEventListener('click', showResult)



const clearValue = () => {
    current_value = [];
    output.textContent = '0';
    outputPrev.textContent = '';
    resultat = '';

}



clear.addEventListener('click', clearValue);
delBtn.addEventListener('click', () => {
    history.textContent = '';
})




allBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.target.classList.add('animation')
    setTimeout(() => {
        e.target.classList.remove('animation')
    }, "200")
}))