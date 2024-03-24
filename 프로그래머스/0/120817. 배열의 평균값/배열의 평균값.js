function solution(numbers) {
    var sum=0;
    var n=numbers.length;
    for(var i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum/n;
    
}