const  path=require("path");
console.log(__filename);
console.log(__dirname);

const fpath=path.join(__dirname,"demo","hello.js");
console.log(fpath);
console.log(path.dirname(fpath));
console.log(path.basename(fpath));
console.log(path.extname(fpath));

console.log(path.parse(fpath));
const obj=path.parse(fpath);
console.log(path.format(obj));