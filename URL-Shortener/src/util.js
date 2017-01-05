/**
 * Created by flaviocassini on 1/5/17.
 */
var www = "aol.com" //hardcoded url
function returnStringGen(strLength) {

    //random

    var strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnobqrstuvwxyz1234567890' //random characters
    var strReturn = '' //variable to fill genenerated link
    for (var i = 0; i < strLength; i++) {
        var rand = Math.round(Math.random() * (strSource.length - 1), www);//making the generator by adding math random and math round with my hardcoded url
        strReturn += strSource.charAt(rand);//picks a random character no need for array
    }

    return strReturn;

}
exports.stringGen = returnStringGen;