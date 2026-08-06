export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}   

export function mul(a,b){
    return a*b;
}   

export function div(a,b){
    if(b==0){
        return "Division by zero is not allowed"
    }
    return a/b;
}

// module.exports = {add, sub, mul, div}