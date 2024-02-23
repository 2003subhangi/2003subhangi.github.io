let inputs = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            inputs.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML === '%') {

            const percentage = parseFloat(string) / 100;
            inputs.value = percentage;
            string = percentage;
        }
        else {
            string += e.target.innerHTML;
            inputs.value = string;

        }



    })
})