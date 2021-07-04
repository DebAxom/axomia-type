import Kars from 'words/kar.json';
import isVowel from  './vowel.js';

export default function(first,last){
    var charArr_First = first.split('');
    var charArr_Last = last.split('');
    var last_char = charArr_First[charArr_First.length-1];
    var first_char = charArr_Last[0];

    // Converting য় to ্য় in some situations.
    if(first_char==="য়" && !isVowel(last_char)){
        charArr_Last[0] = "্য়";
        return first + charArr_Last.join('');
    }

    // Adding kars of vowels.
    if(isVowel(last_char)){

        if(first_char==="আ"){
            charArr_Last[0] = "য়া";
            return first + charArr_Last.join('');
        }

        return first+last;
    }
    
    if(isVowel(first_char)){
        charArr_Last[0] = Kars[first_char];
        return first + charArr_Last.join('');
    }

    return first+last;
}