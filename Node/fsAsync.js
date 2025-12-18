const fs = require("fs").promises;
const path = require("path");

const fpath = path.join(__dirname, "demoFolder");
const filePath = path.join(fpath, "demoFile.txt");

fs.mkdir(fpath, { recursive: true }, (err) => {
    if (err) {
        console.log("Error creating folder:", err);
    } else {
        console.log("Folder created successfully using asynchronous method.");

        fs.writeFile(filePath, "This is a sample text file created using fs module.", (err) => {
            if (err) {
                console.log("Error writing file:", err);
            } else {
                console.log("File written successfully using asynchronous method.");

                fs.readFile(filePath, "utf8", (err, data) => {
                    if (err) {
                        console.log("Error reading file:", err);
                    } else {
                        console.log("File data read using asynchronous method:\n", data);

                        fs.rename(filePath, path.join(fpath, "renamedDemoFile.txt"), (err) => {
                            if (err) {
                                console.log("Error renaming file:", err);
                            } else {
                                console.log("File renamed successfully using asynchronous method.");

                                fs.unlink(path.join(fpath, "renamedDemoFile.txt"), (err) => {
                                    if (err) {
                                        console.log("Error deleting file:", err);
                                    } else {
                                        console.log("File deleted successfully using asynchronous method.");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
