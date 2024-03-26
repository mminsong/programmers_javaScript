function solution(array) {
    var n=array.sort((a,b)=>a-b);
    return n[parseInt((array.length)/2)];
}