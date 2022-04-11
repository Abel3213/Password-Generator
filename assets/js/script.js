
/*function generatePassword () {
  if (generateBtn) {
    var passwordLength = window.prompt('How many characters would you like your password to contain?')
    console.log(passwordLength)
  };
  if (passwordLength < 8) {
    window.alert('Password length must be at least 8 characters')
  }else if (passwordLength > 128) {
    window.alert('Password legth must be under 128 characters')
  };
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.confirm('Click OK to confirm inculding special characters.')
    console.log(window.confirm)
  };
  if (window.confirm = true) {
    alert('Hello World')
  }else if (window.confirm = false) {
    alert('Goodbye World')
  }
};*/

const generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const numberChars = ["0,1,2,3,4,5,6,7,8,9"];
const upperChars = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
const lowerChars = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
const spcChars = ["!,@,#,$,%,^,&,*"];
const allChars = numberChars.concat(upperChars, lowerChars, spcChars);

function generatePassword() {
  var text1 = "";
  var text2 = "";
  var array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  var array2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const passwordLength = window.prompt('How many characters would you like your password to contain?');


  for (var i = 0; i < passwordLength; i++)
    text1 += array1.charAt(Math.floor(Math.random() * array1.length));
    console.log ("array1", text1);
  for (var i = 0; i < passwordLength; i++)
    text2 += array2.charAt(Math.floor(Math.random() * array2.length));
    console.log("array2", text2);


 
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.confirm('Click OK to confirm inculding special characters.');
      console.log(window.confirm);
      if (window.confirm = "ok") {
        return text1;
      }else if (window.confirm = "cancel") {
        return text2;
    }else if (passwordLength < 8) {
      window.alert('Password length must be at least 8 characters')
    }else if (passwordLength > 128) {
      window.alert('Password legth must be under 128 characters')
    }
    };
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

  console.log(passwordText.value=password);

};








