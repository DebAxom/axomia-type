function Similarity(a,b) {
    var equivalency = 0;
    var minLength = (a.length > b.length) ? b.length : a.length;    
    var maxLength = (a.length < b.length) ? b.length : a.length;    
    for(var i = 0; i < minLength; i++) {
        if(a[i] == b[i]) {
            equivalency++;
        }
    }

    var weight = equivalency / maxLength;
    return (weight * 100);
}

export default function(a,b){
    let Required_Similarity_Rate = 80;

    if(a.length>=8 || b.length>=8){
        Required_Similarity_Rate = 60;
    }

    let Actual_Similarity_Rate = Similarity(a,b);

    if(Actual_Similarity_Rate>=Required_Similarity_Rate) return true;

    return false;

}