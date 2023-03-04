// credits: apsillers, https://stackoverflow.com/questions/46810658/how-to-transform-superscript-number-to-real-number-in-javascript
function digitFromSuperscript(superChar) {
    var result = "⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(superChar);
    if(result > -1) { return result; }
    else { return superChar; }
}
function digitFromSubscript(subChar) {
    var result = "₀₁₂₃₄₅₆₇₈₉".indexOf(subChar);
    if(result > -1) { return result; }
    else { return subChar; }
}

output.ingredientQuantity = 0;
var TextChunks = output.ingredientText.split(" ");

for (var i = 0; i<TextChunks.length; i++) {
    try {
      var chunk = TextChunks[i]
        .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, digitFromSuperscript)
        .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, digitFromSubscript);
      var quantity = eval(chunk);

      output.ingredientQuantity += quantity;

    } catch (error) {
    }
}
