const fs = require('fs');
const xml2js = require('xml2js');

// Path to xml file
const path_read = '/Users/vincentketteniss/StudioProjects/kptncookandroid/core/src/main/res/values/strings.xml'

// Path to target
const path_write = '/Users/vincentketteniss/UITests-KC/.localizations/Android/EN/output.js'

// Read the XML file from the file system
const xmlString = fs.readFileSync(path_read, 'utf8');

// Parse the XML string using xml2js
const parser = new xml2js.Parser();
parser.parseString(xmlString, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        const stringElements = result.resources.string;
        const stringObject = {};
        for (const string of stringElements) {
            const name = string.$.name;
            const value = string._;
            stringObject[name] = value;
        }
        const stringObjectString = `output.strings = ${JSON.stringify(stringObject, null, 2)};`;

        fs.writeFile(path_write, stringObjectString, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File written successfully');
            }
        });
    }
});
