function solution(numbers, num1, num2) {
    var number=[];
    for(var i=num1;i<=num2;i++){
        number.push(numbers[i]);
    }
    return number;
}