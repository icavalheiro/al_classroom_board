import fs from "fs"

var databaseFileName = 'database.json';

function database(value) {
    var fileName = __dirname + '/' + databaseFileName;
    if(!value){
        if(fs.existsSync(fileName))
            return JSON.parse(fs.readFileSync(fileName));
        return null;
    }

    fs.writeFileSync(fileName, JSON.stringify(value));
    return value;
}