import Kars from 'words/kar.json';
import isVowel from  './vowel.js';

export default function(first,last){
    var charArr_First = first.split('');
    var charArr_Last = last.split('');
    var last_char = charArr_First[charArr_First.length-1];
    var first_char = charArr_Last[0];

    if(!isVowel(last_char) && first_char==="ৰ" && last_char!="ং"){
        charArr_Last[0] = "্ৰ";
    }

    if(last_char==="ৰ" && !isVowel(first_char)){
        if(first_char==="য়"){
            charArr_Last[0] = "য";
        }
        charArr_First[charArr_First.length-1] = "ৰ্";
        return charArr_First.join('')+charArr_Last.join('');
    }

    // Converting য় to ্য in some situations.
    if(first_char==="য়" && !isVowel(last_char)){
        charArr_Last[0] = "্য";
    }

    // Converting ং to ঙ in some situations.
    if(last_char==="ং" && isVowel(first_char)){
        charArr_First[charArr_First.length-1] = "ঙ";
    }

    // Adding kars of vowels.
    if(isVowel(last_char)){

        if(first_char==="আ" && last_char==="ই"){
            charArr_Last[0] = "য়া";
        }

        if(first_char==="আ" && last_char==="উ"){
            charArr_Last[0] = "ৱা";
        }
        return charArr_First.join('')+charArr_Last.join('');
    }
    
    if(isVowel(first_char)){

        if(last_char==="গ" && first_char==="ও"){
            charArr_Last[0] = "ো";
        }else{
            charArr_Last[0] = Kars[first_char];
        }
        
        return charArr_First.join('') + charArr_Last.join('');
    }
    
    return charArr_First.join('')+charArr_Last.join('');
}