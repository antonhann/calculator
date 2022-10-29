const numbers = document.querySelectorAll('.number')
const board = document.querySelector('.display')
const operators = document.querySelectorAll('.operator')
const previous = document.querySelector('.pre')
const feedback = document.querySelector('.feedback')
var first = 0
var second = 0
var check = true
var operation = ''
numbers.forEach(n => {
    n.addEventListener('click', function (){
        feedback.innerHTML = ''
        num = n.getAttribute('id')
        board.innerHTML += num
    });
});
operators.forEach(n => {
    n.addEventListener('click', function (){
        // this if statement check if this is the first operation done to the number
        if (check != true){
            // this if statement checks if the user has put in a number in the display and allows the option to change operations
            if (board.innerHTML.length == 2){
                o = n.getAttribute('id')
                operation = n.getAttribute('id')
                board.innerHTML = o + ' '
                //the else statement allows the user to continuously calculate as they choose multiple operations as long as a number is given
            }else{
                o = n.getAttribute('id')
                submitnumber(first)
                operation = n.getAttribute('id')
                first = parseFloat(previous.innerHTML)
                previous.innerHTML = first
                board.innerHTML = o + ' '
            }
        }else{
            //this if statement checks if the user inputed a number and if not asks them to do so
            if (board.innerHTML == ''){
                feedback.innerHTML = 'select a number first!'
                //this else statement takes the number given and operation chosen and displays it to the user.
            }else{
                o = n.getAttribute('id')
                check = false
                operation = n.getAttribute('id')
                first = parseFloat(board.innerHTML)
                previous.innerHTML = first
                board.innerHTML = o + ' '
            }
        }
    });
});
function cleardisplay(){
    previous.innerHTML = '';
    board.innerHTML = '';
    feedback.innerHTML = '';
    check = true
    first = 0
    second = 0
}

function add(x, y){
    return x + y
}
function sub(x, y){
    return x - y
}
function mul(x, y){
    return x * y
}
function div(x, y){
    return x / y
}

function submitnumbers(x) {
    check = true
    if (board.innerHTML.length == 2){
        feedback.innerHTML = 'select a number first!'
        return
    }else{
        submitnumber(x)
        board.innerHTML = ''
        return
    }
}
function previousans(){
    board.innerHTML = previous.innerHTML
    return
}
function submitnumber(x) {
    y = parseInt(board.innerHTML.slice(2))
    if (x == ''){
        feedback.innerHTML = 'select a number first!'
        return
    }else{
        var result = 0
        if (operation == 'x'){
            result = mul(x, y)
        }
        if (operation == '/'){
            result = div(x, y)
        }
        if (operation == '+'){
            result = add(x, y)
        }
        if (operation == '-'){
            result = sub(x, y)
        }
        board.innerHTML = result
        previous.innerHTML = result
    }
    return
}