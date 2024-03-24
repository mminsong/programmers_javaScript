function solution(array, height) {
    var count=0;
    for(i=0;i<array.length;i++){
        if(array[i]>height)
            count++;
        else
            count;
    }
    return count;
}