function solution(my_string) {
    var string=[];
    var n=my_string.length;
    for(var i=0;i<n;i++)
        string[i]=my_string[n-1-i];
    return string.join('');
}