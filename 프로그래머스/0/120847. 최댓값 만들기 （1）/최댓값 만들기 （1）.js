function solution(numbers) {
    var n=Math.max(...numbers);
    function compare(a,b){
        return a-b;
    }
    numbers.sort(compare).pop();
    var m=Math.max(...numbers);
    return n*m;
}