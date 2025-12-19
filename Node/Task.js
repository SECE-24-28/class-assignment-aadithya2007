const fs = require("fs");

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

if (!command || !fileName) {
    console.log("Usage:");
    console.log("node sample.js create <file>");
    console.log("node sample.js add <file> <content>");
    console.log("node sample.js read <file>");
    console.log("node sample.js update <oldfile> <newfile>");
    console.log("node sample.js delete <file>");
    process.exit();
}

switch (command) {

    case "create":
        if (fs.existsSync(fileName)) {
            console.log("File already exists");
        } else {
            fs.writeFileSync(fileName, "");
            console.log(`File '${fileName}' created`);
        }
        break;

    case "add":
        if (!content) {
            console.log("Please provide content to add");
        } else {
             const data = fs.readFileSync(fileName, "utf-8");
            fs.writeFileSync(fileName, data+" "+content);
            console.log(`Content written to '${fileName}'`);
        }
        break;

    case "read":
        if (!fs.existsSync(fileName)) {
            console.log("File does not exist");
        } else {
            data = fs.readFileSync(fileName, "utf-8");
            console.log("File Content:");
            console.log(data);
        }
        break;

    case "update":   
        const newFileName = process.argv[4];
        if (!fs.existsSync(fileName)) {
            console.log("File does not exist");
        } else if (!newFileName) {
            console.log("Please provide new file name");
        } else {
            fs.renameSync(fileName, newFileName);
            console.log(`File renamed from '${fileName}' to '${newFileName}'`);
        }
        break;

    case "delete":
        if (!fs.existsSync(fileName)) {
            console.log("File does not exist");
        } else {
            fs.unlinkSync(fileName);
            console.log(`File '${fileName}' deleted`);
        }
        break;

    default:
        console.log("Invalid command");
}
