import wordsMap from '../words/words.json';
import Translate from './translate.js';
import areSimilar from './similarity.js';

let wordsList = Object.keys(wordsMap);

export default function(word){    

    if(wordsList.includes(word)){
        return wordsMap[word.toLowerCase()];
    }

    for (let i of wordsList){
        if(areSimilar(i,word)) {
            return wordsMap[i];
        }
    }
    
    word = Translate(word);
    word = PostProcess(word);

    return word;
}

function PostProcess(word){

    word = word.replace(/o/g,'');
    let charArr = word.split('');

    if(word.charAt(0)==="ং"){
        charArr[0] = "ঙ";
    }

    // if(charArr[charArr.length-2] === "স"){
    //     charArr[charArr.length-2] = "ছ";
    // }

    // if(charArr[charArr.length-1] === "স"){
    //     charArr[charArr.length-1] = "ছ";
    // }

    if(word.startsWith("ৰ্")){
        charArr[1]="";
    }
    
    if(word.endsWith('্')){
        charArr[charArr.length-1] = " ।";
    }

    word = charArr.join('');

    return word;
}