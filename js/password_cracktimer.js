////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toWords(number) {
    if (number < 120) {
        return getNumberWords(number, true) + " Seconds";
    }
    var hour = 60 * 60;
    if (number < hour) {
        minutes = number / 60;
        return getNumberWords(minutes, true) + " Minutes";
    }
    var day = hour * 24;
    if (number < (2 * day)) {
        hours = number / hour;
        return getNumberWords(hours) + " Hours";
    }
    var month = day * 30;
    if (number < month) {
        days = number / day;
        return getNumberWords(days) + " Days";
    }
    var year = day * 365;
    if (number < year) {
        months = number / month;
        return getNumberWords(months) + " Months";
    }
    var century = year * 100;
    if (number < century * 10) {
        years = number / year;
        return getNumberWords(years) + " Years";
    }
    if (number < century * 100) {
        centuries = number / century;
        return getNumberWords(centuries) + " Centuries";
    }
    years = number / year;
    return getNumberWords(years) + " Years";
}

function getNumberWords(number, twoDP) {
    var numberWords = "";
    var trillion = Math.pow(10, 12);
    var billion = Math.pow(10, 9);
    var million = Math.pow(10, 6);
    var thousand = Math.pow(10, 4);
    var hundred = Math.pow(10, 3);
    while (number / trillion >= 1) {
        numberWords = " Trillion" + numberWords;
        number = number / trillion;
    }
    while (number / billion >= 1) {
        numberWords = " Billion" + numberWords;
        number = number / billion;
    }
    while (number / million >= 1) {
        numberWords = " Million" + numberWords;
        number = number / million;
    }
    while (number / thousand >= 1) {
        numberWords = " Thousand" + numberWords;
        number = number / thousand;
    }
    while (number / hundred >= 1) {
        numberWords = " Hundred" + numberWords;
        number = number / hundred;
    }
    if (twoDP) {
        decimalPoint = 100;
    } else {
        decimalPoint = 1;
    }
    number = (Math.round(number * decimalPoint) / decimalPoint)
    numberWords = number + numberWords;
    return numberWords;
}

function getCrackTime(password) {
    var checked = zxcvbn(password);
    return toWords(checked.crack_time);
}