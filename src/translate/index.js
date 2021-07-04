import wordsMap from '../words/words.json';
import AST from './translate.js';
import suffix from '../words/suffix.json';
import prefix from '../words/prefix.json';
import areSimilarity from './similarity.js';

let wordsList = Object.keys(wordsMap);

export default function(word){    

    if(wordsList.includes(word)){
        return wordsMap[word.toLowerCase()];
    }

    for (let i of wordsList){
        if(areSimilarity(i,word)) {
            let newWord = word.replace(i,',');
            let wordsArr = newWord.split(',');
            let prefixWord = (prefix[wordsArr[0]] || '');
            let suffixWord = (suffix[wordsArr[1]] || '');
            return prefixWord+wordsMap[i]+suffixWord;
        }
    }
    
    word = AST(word);

    return word;
}