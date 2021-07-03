(function () {
    'use strict';

    var namaskar = "নমস্কাৰ";
    var toi = "তই";
    var kun = "কোন";
    var moi = "মই";
    var hoi = "হয়";
    var korsa = "কৰছা";
    var manuh = "মানুহ";
    var goru = "গৰু";
    var kukur = "কুকুৰ";
    var najan = "নাজান";
    var ami = "আমি";
    var axom = "অসম";
    var akhom = "অসম";
    var swadhin = "স্ৱাধীন";
    var hobo = "হব";
    var kore = "কৰে";
    var kaziranga = "কাজিৰঙা";
    var rashtriya = "ৰাষ্ট্ৰীয়";
    var udyan = "উদ্যান";
    var nagoan = "নগাওঁ";
    var golaghat = "গোলাঘাট";
    var bhogolik = "ভৌগোলিক";
    var jalbayu = "জলবায়ু";
    var brahmaputra = "ব্ৰহ্মপুত্ৰ";
    var nadi = "নদী";
    var nodi = "নদী";
    var biboron = "বিৱৰণ";
    var prithivi = "পৃথিৱী";
    var prithibi = "পৃথিৱী";
    var prithivir = "পৃথিৱীৰ";
    var prithibir = "পৃথিৱীৰ";
    var esingia = "এশিঙীয়া";
    var garh = "গঁড়";
    var gor = "গঁড়";
    var hati = "হাতী";
    var moh = "ম'হ";
    var dol = "দল";
    var harin = "হৰিণ";
    var horin = "হৰিণ";
    var uttar = "উত্তৰ";
    var dakshin = "দক্ষিণ";
    var bhumi = "ভূমি";
    var prajati = "প্ৰজাতি";
    var bonoria = "বনৰীয়া";
    var gahori = "গাহৰি";
    var etiya = "এতিয়া";
    var tetiya = "তেতিয়া";
    var jetia = "যেতিয়া";
    var ghor = "ঘৰ";
    var lahe = "লাহে";
    var si = "সি";
    var tai = "তাই";
    var e$2 = "ই";
    var khed = "খেদ";
    var kapur = "কাপোৰ";
    var pindha = "পিন্ধা";
    var nai = "নাই";
    var neki = "নেকি";
    var sini = "চিনি";
    var napau = "নাপাও";
    var kori = "কৰি";
    var joi = "জয়";
    var kokia = "ককাই";
    var apun = "আপেন";
    var kot = "ক'ত";
    var as = "আছ";
    var korib = "কৰিব";
    var nokorib = "নকৰিব";
    var wordsMap = {
    	namaskar: namaskar,
    	toi: toi,
    	kun: kun,
    	moi: moi,
    	hoi: hoi,
    	korsa: korsa,
    	manuh: manuh,
    	goru: goru,
    	kukur: kukur,
    	najan: najan,
    	ami: ami,
    	axom: axom,
    	akhom: akhom,
    	swadhin: swadhin,
    	hobo: hobo,
    	kore: kore,
    	kaziranga: kaziranga,
    	rashtriya: rashtriya,
    	udyan: udyan,
    	nagoan: nagoan,
    	golaghat: golaghat,
    	bhogolik: bhogolik,
    	jalbayu: jalbayu,
    	brahmaputra: brahmaputra,
    	nadi: nadi,
    	nodi: nodi,
    	biboron: biboron,
    	prithivi: prithivi,
    	prithibi: prithibi,
    	prithivir: prithivir,
    	prithibir: prithibir,
    	esingia: esingia,
    	garh: garh,
    	gor: gor,
    	hati: hati,
    	moh: moh,
    	dol: dol,
    	harin: harin,
    	horin: horin,
    	uttar: uttar,
    	dakshin: dakshin,
    	bhumi: bhumi,
    	prajati: prajati,
    	bonoria: bonoria,
    	gahori: gahori,
    	etiya: etiya,
    	tetiya: tetiya,
    	jetia: jetia,
    	ghor: ghor,
    	lahe: lahe,
    	si: si,
    	tai: tai,
    	e: e$2,
    	khed: khed,
    	kapur: kapur,
    	pindha: pindha,
    	nai: nai,
    	neki: neki,
    	sini: sini,
    	napau: napau,
    	kori: kori,
    	joi: joi,
    	kokia: kokia,
    	apun: apun,
    	kot: kot,
    	as: as,
    	korib: korib,
    	nokorib: nokorib
    };

    var a$2 = "আ";
    var i$1 = "ই";
    var e$1 = "এ";
    var u$1 = "উ";
    var ou$1 = "ঔ";
    var oi$1 = "ঐ";
    var o$1 = "ও";
    var kh = "খ";
    var kl = "ক্ল";
    var k = "ক";
    var cl = "ক্ল";
    var c = "ক";
    var gh = "ঘ";
    var g = "গ";
    var ng = "ং";
    var sk = "স্ক";
    var s = "ছ";
    var n = "ন";
    var m = "ম";
    var j = "জ";
    var jh = "ঝ";
    var th = "থ";
    var t = "ত";
    var d = "দ";
    var dh = "ধ";
    var bh = "ভ";
    var b = "ব";
    var w = "ৱ";
    var h = "হ";
    var p = "প";
    var y = "য়";
    var r = "ৰ";
    var f = "ফ";
    var l = "ল";
    var sub_words_Map = {
    	a: a$2,
    	i: i$1,
    	e: e$1,
    	u: u$1,
    	ou: ou$1,
    	oi: oi$1,
    	o: o$1,
    	kh: kh,
    	kl: kl,
    	k: k,
    	cl: cl,
    	c: c,
    	gh: gh,
    	g: g,
    	ng: ng,
    	sk: sk,
    	s: s,
    	n: n,
    	m: m,
    	j: j,
    	jh: jh,
    	th: th,
    	t: t,
    	d: d,
    	dh: dh,
    	bh: bh,
    	b: b,
    	w: w,
    	h: h,
    	p: p,
    	y: y,
    	r: r,
    	f: f,
    	l: l
    };

    var sub_words_Map_Kar = {
    	"আ": "া",
    	"ই": "ি",
    	"এ": "ে",
    	"উ": "ু",
    	"ঔ": "ৌ",
    	"ঐ": "ৈ",
    	"ও": "ো"
    };

    let vowels = ["অ","আ","ই","ঈ","উ","ঊ","এ","ঐ","ও","ঔ","া","ি","ী","ু","ূ","ে","ৈ","ো","ৌ"];

    var isVowel = word => vowels.includes(word);

    // import sub_words_Map from 'words/sub-words.json';

    function add(first,last){
        var charArr_First = first.split('');
        var charArr_Last = last.split('');
        var last_char = charArr_First[charArr_First.length-1];
        var first_char = charArr_Last[0];

        if(isVowel(last_char)){
            return first+last;
        }
        
        if(isVowel(first_char)){
            charArr_Last[0] = sub_words_Map_Kar[first_char];
            return first + charArr_Last.join('');
        }

        return first+last;
    }

    let wordsList$1 = Object.keys(sub_words_Map);

    function AST(word){

        if(wordsList$1.includes(word)) return sub_words_Map[word.toLowerCase()];

        let charArr = word.split('');
        let strLen = charArr.length;
        
        if(strLen==1) return word;

        const half = Math.ceil(strLen / 2);    
        const firstHalf = charArr.splice(0, half);
        const secondHalf = charArr.splice(-half);

        return add(AST(firstHalf.join('')),AST(secondHalf.join('')));
    }

    var a$1 = "া";
    var i = "ি";
    var o = "ো";
    var e = "ে";
    var u = "ু";
    var ou = "ৌ";
    var oi = "ৈ";
    var ku = "কু";
    var no = "নু";
    var nu = "নু";
    var isu = "িছু";
    var su = "ছু";
    var suffix = {
    	a: a$1,
    	i: i,
    	o: o,
    	e: e,
    	u: u,
    	ou: ou,
    	oi: oi,
    	ku: ku,
    	no: no,
    	nu: nu,
    	isu: isu,
    	su: su
    };

    var a = "অ";
    var prefix = {
    	a: a
    };

    function Similarity(a,b) {
        var equivalency = 0;
        var minLength = (a.length > b.length) ? b.length : a.length;    
        var maxLength = (a.length < b.length) ? b.length : a.length;    
        for(var i = 0; i < minLength; i++) {
            if(a[i] == b[i]) {
                equivalency++;
            }
        }

        var weight = equivalency / maxLength;
        return (weight * 100);
    }

    function areSimilarity(a,b){
        let Required_Similarity_Rate = 60;

        if(a.length>=8 || b.length>=8){
            Required_Similarity_Rate = 75;
        }

        let Actual_Similarity_Rate = Similarity(a,b);

        if(Actual_Similarity_Rate>=Required_Similarity_Rate) return true;

        return false;

    }

    let wordsList = Object.keys(wordsMap);

    function translateScript(word){    

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

    let Textarea = document.getElementsByTagName('textarea')[0];

    function TranslateInput(e){
            var _this = Textarea;
            OnInput();
            if (e.data == " ") {
                var str = _this.value;
                var inputwords = str.split(" ");
                var lastword = inputwords[inputwords.length - 2];
                if(lastword===null || lastword==" " || lastword=="") return;
                let newLastWord = translateScript(lastword);
                inputwords[inputwords.length - 2] = newLastWord;
                _this.value = inputwords.join(" ");
        }
    }
    function OnInput() {
        Textarea.style.height = "auto";
        Textarea.style.height = (Textarea.scrollHeight) + "px";
    }
    Textarea.addEventListener('input',TranslateInput);

}());
