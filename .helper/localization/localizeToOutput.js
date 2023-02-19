const fs = require('fs');

// Path to localize file
const path_read = '/Users/vincentketteniss/xcode/kptncookiphone/KptnCook/en.lproj/Localizable.strings'

// Path to write file
const path_write = '/Users/vincentketteniss/UITests-KC/.localizations/iOS/EN/output.js'

// Read the contents of the Localizable.strings file
const localizableStrings = fs.readFileSync(path_read, { encoding: 'utf8' });

// Split the contents into lines
const lines = localizableStrings.split('\n');

// Create an object to hold the key-value pairs
const localizedStrings = {};

// Loop over each line and extract the key-value pair
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Ignore comment lines and blank lines
  if (line.length === 0 || line.startsWith('//')) {
    continue;
  }

  // Extract the key and value from the line
  const match = line.match(/^"(.+)" = "(.+)";$/);
  if (match) {
    const key = match[1];
    const value = match[2];
    localizedStrings[key] = value;
  }
}

// Write the localizedStrings object to a new JavaScript file
const outputFileContents = `output.strings = ${JSON.stringify(localizedStrings, null, 2)};\n`;
fs.writeFileSync(path_write, outputFileContents);

console.log('Localized strings file written successfully');
