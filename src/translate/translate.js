import charMap from 'words/char.json';
import addWords from './add-words.js';

let charsList = Object.keys(charMap);

export default function Translate(word){

    if(charsList.includes(word)) return charMap[word.toLowerCase()];

    // Replacing some 2-letters English characters to single character Assamese letters.
    word = word.replace(/th/g,'থ');
    word = word.replace(/bh/g,'ভ');
    word = word.replace(/cl/g,'ক্ল');
    word = word.replace(/jh/g,'ঝ');
    word = word.replace(/zh/g,'ঝ');
    word = word.replace(/sk/g,'স্ক');
    word = word.replace(/dh/g,'ধ');
    word = word.replace(/ng/g,'ং');

    let charArr = word.split('');
    let strLen = charArr.length;
    
    if(strLen==1) return word;

    const half = Math.ceil(strLen / 2);    
    const firstHalf = charArr.splice(0, half);
    const secondHalf = charArr.splice(-half);

    const firstHalfString = firstHalf.join('');
    const secondHalfString = secondHalf.join('');

    return addWords(Translate(firstHalfString),Translate(secondHalfString));
}