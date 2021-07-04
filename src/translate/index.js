import wordsMap from '../words/words.json';
import Translate from './translate.js';
import suffix from '../words/suffix.json';
import prefix from '../words/prefix.json';
import areSimilar from './similarity.js';

let wordsList = Object.keys(wordsMap);

export default function(word){    

    if(wordsList.includes(word)){
        return wordsMap[word.toLowerCase()];
    }

    for (let i of wordsList){
        if(areSimilar(i,word)) {
            let newWord = word.replace(i,',');
            let wordsArr = newWord.split(',');
            let prefixWord = (prefix[wordsArr[0]] || '');
            let suffixWord = (suffix[wordsArr[1]] || '');
            return prefixWord+wordsMap[i]+suffixWord;
        }
    }
    
    word = Translate(word);

    return word;
}