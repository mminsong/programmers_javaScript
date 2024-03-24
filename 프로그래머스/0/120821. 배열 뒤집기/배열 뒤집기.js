function solution(num_list) {
    var n=num_list.length
    var result=[];
    for(var i=0;i<n;i++)
        result[i]=num_list[n-1-i];
    return result;
}