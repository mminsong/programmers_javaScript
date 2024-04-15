function solution(array) {
    var result=[];
    var max=Math.max(...array);
    result.push(max);
    var index=array.indexOf(max,1);
    result.push(index);
    return result;
}