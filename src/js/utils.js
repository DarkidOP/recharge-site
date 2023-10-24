
// checks if the string is emty & retuns optalParams or the string or null
export function emptyStringChecker(string , optinalPassedString){
    if(string === undefined || string  === null || string  === "" || string === false){
        if(optinalPassedString === undefined || optinalPassedString == null || optinalPassedString == ""){
        return null;} else return optinalPassedString;
    } else return (string)
}
