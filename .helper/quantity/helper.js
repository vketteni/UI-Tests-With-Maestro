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