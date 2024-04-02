function solution(sides) {
    var max=Math.max(...sides);
    if(max==sides[0]){
        if(sides[0]<sides[1]+sides[2])
            return 1;
        else
            return 2;
    }
    else if(max==sides[1]){
        if(sides[1]<sides[2]+sides[0])
            return 1;
        else
            return 2;
    }
    else{
        if(sides[2]<sides[1]+sides[0])
            return 1;
        else
            return 2;
    }
        
}