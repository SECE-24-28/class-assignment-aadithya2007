//Qn1
let str1="hello world";
let words=str1.split(" ");
for(let i=0;i<words.length;i++){
    words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
}
str1=words.join(" ");
console.log(str1);
//Qn2
function wordCount(str){
    
    let arr=str2.split(" ");
    return arr.length;
}

let str2="I Love JavaScript";
console.log(wordCount(str2));
//Qn3
str2="my name is jhon";
console.log(str2.replaceAll(" ","-"));
//Qn4
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
//Qn5
str2="Jhon Deo Smith";
let arr=str2.split(" ");
let str3="";
for(let a of arr){
    str3+=a.at(0);
}
console.log(str3);
//Qn6
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
//Qn7
str2="programming";
let result="";
for(let char of str2){
    if(!result.includes(char)){
        result+=char;
    }
}
console.log(result);
//Qn8
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
