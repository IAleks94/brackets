module.exports = function check(str, bracketsConfig) {
    let count = 0;
    if (str.length % 2 !== 0) {
        return false;
    }
    for (i = 0; i < str.length; i++) {
        i === bracketsConfig.length ? (i -= bracketsConfig.length) : i;
        let [openBracket, clousBracket] = bracketsConfig[i];
        let regExp = new RegExp(`\\${openBracket}\\${clousBracket}`,'g');
        if (openBracket/1 && clousBracket/1) {
          regExp = new RegExp(`${openBracket}${clousBracket}`,'g');
        }
        let strMatc = str.match(regExp);
        if (strMatc) {
            let newStr = str.replace(regExp, "");
            if (newStr) {
                return check(newStr, bracketsConfig);
            } else {
                return true;
            }
        } else {
            count++;
            if (count === bracketsConfig.length) {
                return false;
            }
        }
    }
    return false;
};

