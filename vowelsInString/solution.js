function numberOfVowels(str) {
    var vowels = "aeiou";
    ret = 0;
    for (var i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i]) >= 0) { 
            ret = ret + 1;
        }
    }
    return ret;
}


console.log('hello -> ', numberOfVowels('hello'));
console.log('you are great! -> ', numberOfVowels('you are great!'));
console.log('why? -> ', numberOfVowels('why?'));
