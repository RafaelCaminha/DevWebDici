function math(num1, num2) {
    var soma= num1+num2
    var sub= num1-num2
    var mul= num1*num2
    var div= num1/num2
    var resto=num1%num2

    console.log(soma)
    console.log(sub)
    console.log(mul)
    console.log(div)
    return resto
}

console.log(math(5, 6))