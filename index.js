function isNullOrEmpty(input){
    // returns T if input is und, null, or empty
    return(input == undefined || input == null || input == '');
}

module.exports = isNullOrEmpty;
