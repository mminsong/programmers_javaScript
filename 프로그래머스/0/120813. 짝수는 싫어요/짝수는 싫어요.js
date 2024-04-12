function solution(n) {
    var answer = [];
    for(var i=0;i<n;i++){
        if(i%2==0)
            answer[i/2]=i+1;
    }
    return answer;
}