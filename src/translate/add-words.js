// import sub_words_Map from 'words/sub-words.json';
import sub_words_Map_Kar from 'words/kar.json';
import isVowel from  './vowel.js';

export default function(first,last){
    var charArr_First = first.split('');
    var charArr_Last = last.split('');
    var last_char = charArr_First[charArr_First.length-1];
    var first_char = charArr_Last[0];

    if(isVowel(last_char)){
        if(first==="আ"){
            charArr_Last[0] = "য়া";
        }

        return first+last;
    }
    
    if(isVowel(first_char)){
        charArr_Last[0] = sub_words_Map_Kar[first_char];
        return first + charArr_Last.join('');
    }

    return first+last;
}