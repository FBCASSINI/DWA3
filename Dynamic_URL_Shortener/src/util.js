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
var chalk = require('chalk');


exports.debug = (title, obj, status) => {
  const seperator = '\n===================================\n';
  const output = seperator + title + seperator;


var error = chalk.bold.red
var success = chalk.green

  if(!status){
    status = "";
  }


  if (!process.env.DEBUG){
    console.log(success(output), obj, status);
  }
};
