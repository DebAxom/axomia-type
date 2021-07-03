import sub_words_Map from 'words/sub-words.json';
import add from './add-words.js';

let wordsList = Object.keys(sub_words_Map);

export default function AST(word){

    if(wordsList.includes(word)) return sub_words_Map[word.toLowerCase()];

    let charArr = word.split('');
    let strLen = charArr.length;
    
    if(strLen==1) return word;

    const half = Math.ceil(strLen / 2);    
    const firstHalf = charArr.splice(0, half);
    const secondHalf = charArr.splice(-half);

    return add(AST(firstHalf.join('')),AST(secondHalf.join('')));
}