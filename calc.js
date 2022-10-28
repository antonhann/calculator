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
        if (check != true){
            o = n.getAttribute('id')
            submitnumber(first)
            operation = n.getAttribute('id')
            first = parseInt(previous.innerHTML)
            previous.innerHTML = first
            board.innerHTML = o + ' '
        }else{
            if (board.innerHTML == ''){
                feedback.innerHTML = 'select a number first!'
            }else{
                o = n.getAttribute('id')
                check = false
                operation = n.getAttribute('id')
                first = parseInt(board.innerHTML)
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
    if (x == ''){
        feedback.innerHTML = 'select a number first!'
        return
    }else{
        y = parseInt(board.innerHTML.slice(2))
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
        check = true
        previous.innerHTML = result
        return
    }
}
function submitnumber(x) {
    if (x == ''){
        feedback.innerHTML = 'select a number first!'
        return
    }else{
        y = parseInt(board.innerHTML.slice(2))
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