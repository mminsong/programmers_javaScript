function solution(n) {
    var m=0;
    for(var i=2;i<=n;i++){
        if(n===i*i){
            m= 1;
            break;
        }
            
        else{
            m= 2;
            
        }
    }
    return m;
}