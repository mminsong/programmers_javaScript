function solution(n) {
    if(n%7==0)
        return parseInt(n/7);
    else{
        if(n==1)
            return 1;
        else
            return parseInt(n/7)+1;
    }
}