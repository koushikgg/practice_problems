function pairIntersection(arr1, arr2){
    const [a,b]=arr1
    const [c,d]=arr2
    minValue= Math.max(a,c)
    maxValve= Math.min(b,d)
     if (minValue<maxValve){
        return [minValue,maxValve]
     }else if(minValue===maxValve){
        return [minValue]
     }else{
        return []
     }
}

console.log(pairIntersection([11,14],[14,21]));