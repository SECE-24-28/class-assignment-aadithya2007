const os=require("os");
console.log(os.arch());
console.log("OS platform:",os.platform());
console.log("OS version:",os.totalmem());
console.log("Free memory:",os.freemem());
console.log("CPU info:",os.cpus());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.userInfo());

const memory=os.totalmem();
const freeMem=os.freemem();
console.log(`Memory info in MB`);
console.log(`Total memory is : ${memory/(1024*1024)} MB`);
console.log(`Free memory is : ${freeMem/(1024*1024)} MB`);

console.log(`Memory info in GB`);
console.log(`Total memory is : ${memory/(1024*1024*1024)} GB`);
console.log(`Free memory is : ${freeMem/(1024*1024*1024)} GB`);

const uptime=os.uptime();
console.log("uptime in min and hrs");
console.log("uptime in min:",uptime/60);
console.log("uptime in hrs:",uptime/(60*60));
