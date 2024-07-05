const fs = require("fs");
const [, , type, path, ...restArgs] = process.argv;

function editor(type, path, restArgs) {
  switch (type) {
    case "read":
      if (!path) {
        console.error("Please provide a path for reading.");
        return;
      }
      fs.readFile(`./${path}`, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
      break;
    case "append":
      const appendContent = restArgs.join(' ');
      if (!path || !appendContent) {
        console.error("Please provide both a path and content for appending.");
        return;
      }
      fs.appendFile(`${path}`, appendContent, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("TEXT IS APPENDED");
        }
      });
      break;
    case "create":
      const createContent = restArgs.join(' ');
      if (!path || !createContent) {
        console.error("Please provide both a path and content for creating.");
        return;
      }
      fs.writeFile(`${path}`, createContent, (err) => {
        if (err) {
          console.log("Error Occurred: ", err);
        } else {
          console.log("File successfully created");
        }
      });
      break;
    case "delete":
      if (!path) {
        console.error("Please provide a path for deletion.");
        return;
      }
      fs.unlink(`${path}`, (err) => {
        if (err) console.log(err);
        else console.log("File deleted");
      });
      break;
    case "rename":
      const newname = restArgs[0];
      if (!path || !newname) {
        console.error("Please provide both the current path and the new name for renaming.");
        return;
      }
      fs.rename(`${path}`, `${newname}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File is renamed");
        }
      });
      break;
      case "list":
      if (!path) {
        console.error("Please provide a directory path for listing.");
        return;
      }
      fs.readdir(path, (err, files) => {
        if (err) {
          console.error(`Error listing directory '${path}':`, err.message);
        } else {
          console.log(`Contents of directory '${path}':`);
          files.forEach(file => console.log(file));
        }
      });
      break;
    default:
      console.error(`Invalid operation: ${type}`);
  }
}

editor(type, path, restArgs);
