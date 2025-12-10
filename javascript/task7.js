let str1="hello world";
let words=str1.split(" ");
for(let i=0;i<words.length;i++){
    words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
}
str1=words.join(" ");
console.log(str1);

function wordCount(str){
    
    let arr=str2.split(" ");
    return arr.length;
}

let str2="I Love JavaScript";
console.log(wordCount(str2));
str2="my name is jhon";
console.log(str2.replaceAll(" ","-"));

str2="programming";
let charCount={};
for(let char of str2){
    if(charCount[char]){
        charCount[char]++;
    }else{
        charCount[char]=1;
    }
}
for(let char in charCount){
    if(charCount[char]>1){
        console.log(char);
    }
}

str2="Jhon Deo Smith";
let arr=str2.split(" ");
let str3="";
for(let a of arr){
    str3+=a.at(0);
}
console.log(str3);

str2="the quick brown fox";
arr=str2.split(" ");
let word="";
let max=0;
for(let a of arr){
    if(a.length>max){
        max=a.length;
        word=a;
    }
}
console.log(word);

str2="programming";
let result="";
for(let char of str2){
    if(!result.includes(char)){
        result+=char;
    }
}
console.log(result);

str2="hello world hello";
let freq={};
arr=str2.split(" ");
for(let a of arr){
    if(freq[a]){
        freq[a]++;
    }else{
        freq[a]=1;
    }
}
for(let a in freq){
    console.log(a,"-",freq[a]);
}
