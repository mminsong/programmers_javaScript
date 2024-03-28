function solution(n) {
    var m=n.toString().split('').map(Number);
    var sum=0;
    for(var i=0;i<m.length;i++)
        sum+=m[i];
    return sum;
}