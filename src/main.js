import translateScript from './translate/index.js';

let Textarea = document.getElementsByTagName('textarea')[0];

function TranslateInput(e){
        var _this = Textarea;
        OnInput();
        if (e.data == " ") {
            var str = _this.value;
            var inputwords = str.split(" ");
            var lastword = inputwords[inputwords.length - 2];
            if(lastword===null || lastword==" " || lastword=="") return;
            let newLastWord = translateScript(lastword.toLowerCase());
            inputwords[inputwords.length - 2] = newLastWord;
            _this.value = inputwords.join(" ");
    }
}
function OnInput() {
    Textarea.style.height = "auto";
    Textarea.style.height = (Textarea.scrollHeight) + "px";
}
Textarea.addEventListener('input',TranslateInput);