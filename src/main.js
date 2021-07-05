import translateScript from './translate/index.js';

let Textarea = document.getElementsByTagName('textarea')[0];
let ClearBtn = document.getElementById('clear-btn');
let CopyBtn = document.getElementById('copy-btn');

function TranslateInput(e){
        var _this = Textarea;
        _this.style.height = "auto";
        _this.style.height = (Textarea.scrollHeight) + "px";
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

Textarea.addEventListener('input',TranslateInput);

ClearBtn.addEventListener('click',()=>{
    Textarea.value="";
});

CopyBtn.addEventListener('click',()=>{
    Textarea.select();
    Textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
});