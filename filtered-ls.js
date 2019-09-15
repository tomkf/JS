//note second file will not be index w/ "."
const fs = require("fs");

let fpath = process.argv[2];
let fileExt = process.argv[3];

const directoryReader = (dirPath, fileExt) => {
  fs.readdir(dirPath, (err, files) => {
    files.forEach(file => {
      if (file.split(".")[1] === fileExt) {
        console.log(file);
      }
    });
  });
};

directoryReader(fpath, fileExt);
