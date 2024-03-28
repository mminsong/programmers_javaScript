function solution(slice, n) {
    var result;
    if(n%slice==0)
        result=parseInt(n/slice);
    else
        result=parseInt(n/slice)+1;
    return result;
}