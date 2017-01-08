/**
 * Created by flaviocassini on 1/5/17.
 */

function returnStringGen(){

    //random

    var strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnobqrstuvwxyz1234567890'
    var strReturn = '' //variable to fill genenerated link
    var strLength = '9'
    for (var i = 0; i < strLength; i++) {
      ///making the generator by adding math random and math round
        strReturn += strSource.charAt((Math.random()) * strSource.length);

      };

    return strReturn;

}
exports.returnStringGen = returnStringGen;
