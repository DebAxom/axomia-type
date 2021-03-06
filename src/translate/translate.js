import charMap from 'words/char.json';
import addWords from './add-words.js';

let charsList = Object.keys(charMap);

export default function Translate(word){

    if(charsList.includes(word)) return charMap[word.toLowerCase()];

    // Replacing some 2-letters English characters to single character Assamese letters.
    word = Translate2Char(word);

    let charArr = word.split('');
    let strLen = charArr.length;
    
    if(strLen===1) return word;

    const half = Math.ceil(strLen / 2);    
    const firstHalf = charArr.splice(0, half);
    const secondHalf = charArr.splice(-half);

    const firstHalfString = firstHalf.join('');
    const secondHalfString = secondHalf.join('');

    return addWords(Translate(firstHalfString),Translate(secondHalfString));
}

function Translate2Char(word){
    word = word.replace(/oi/g,'ঐ');
    word = word.replace(/ou/g,'ঔ');
    word = word.replace(/ee/g,'i');
    word = word.replace(/th/g,'থ');
    word = word.replace(/bh/g,'ভ');
    word = word.replace(/cl/g,'ক্ল');
    word = word.replace(/kl/g,'ক্ল');
    word = word.replace(/jh/g,'ঝ');
    word = word.replace(/zh/g,'ঝ');
    word = word.replace(/sk/g,'স্ক');
    word = word.replace(/shn/g,'ষ্ণ');
    word = word.replace(/sh/g,'ষ');
    word = word.replace(/ch/g,'চ');
    word = word.replace(/khy/g,'ক্ষ');
    word = word.replace(/kh/g,'খ');
    word = word.replace(/gh/g,'ঘ');
    word = word.replace(/ndh/g,'n.dh');
    word = word.replace(/dh/g,'ধ');
    word = word.replace(/ph/g,'ফ');
    word = word.replace(/ng/g,'ং');
    word = word.replace(/nt/g,'n.t');
    word = word.replace(/tn/g,'t.n');
    word = word.replace(/sw/g,'s.w');
    word = word.replace(/hm/g,'h.m');
    word = word.replace(/mh/g,'m.h');
    word = word.replace(/jyo/g,'জ্যো');
    return word;
}