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
    }

    // Converting ং to ঙ in some situations.
    if(last_char==="ং" && isVowel(first_char)){
        charArr_First[charArr_First.length-1] = "ঙ";
    }

    // Adding kars of vowels.
    if(isVowel(last_char)){

        if(first_char==="আ"){
            charArr_Last[0] = "য়া";
        }

        return charArr_First.join('')+charArr_Last.join('');
    }
    
    if(isVowel(first_char)){
        charArr_Last[0] = Kars[first_char];
        return charArr_First.join('') + charArr_Last.join('');
    }

    return charArr_First.join('')+charArr_Last.join('');
}