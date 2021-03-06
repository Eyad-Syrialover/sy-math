/*
*sy-math.js v2.0 By Eyad Syria-lover
*A JavaScript Library That Extends The Math Object With Some Powerful Methods 
*Instructions Can Be Found At 
http://github.com/Eyad-Syrialover/sy-math
*This Software Is Licensed Under The Terms Of WTFPL License:
--------------------------------------------------------------
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE                     Version 2, December 2004  Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>  Everyone is permitted to copy and distribute verbatim or modified  copies of this license document, and changing it is allowed as long  as the name is changed.             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION   0. You just DO WHAT THE FUCK YOU WANT TO. 
--------------------------------------------------------------

*/
(function() {
Math._GLOBAL_={
Trigonometric:{
resolution:8,
angleUnit:"RADIAN"
},
Logarithmic:{
resolution:32
},
Exponential:{
resolution:32
}

};

Math.isEven=function() {
"use strict";
if (arguments[0]%2!==0) {
return true;
}
else {
return false;
}
};

Math.isOdd=function() {
"use strict";
if (arguments[0]%2==0) {
return true;
}
else {
return false;
}
};

Math.EvenOrOdd=function() {
"use strict";
if (arguments[0]%2==0) {
return "Odd";
}
else {
return "Even";
}
};

Math.isDividable=function() {
"use strict";
if (arguments[0]%arguments[1]==0) {
return true;
}
else {
return false;
}
};

Math.factorial=function() {
"use strict";
if (arguments[0]==1 || arguments[0]==0) {
return 1;
}
else {
return arguments[0]*Math.factorial(arguments[0]-1);
}
};

Math.root=function() {
"use strict";
if (arguments[1]==0) {
return "Error:Can\'t Find Root From Level 0";
}
else {
return Math.pow(arguments[0],1/arguments[1]);
}
};

Math.sum=function() {
"use strict";
var i;
var total=0;
for (i=0;i<arguments.length;i++) {
total+=arguments[i];
}
return total;
};

Math.multiply=function() {
"use strict";
var i;
var total=1;
for (i=0;i<arguments.length;i++) {
total*=arguments[i];
}
return total;
};

Math.getAverage=function() {
"use strict";
var i;
var total=0;
for (i=0;i<arguments.length;i++) {
total+=arguments[i];
}
return total/(arguments.length);
};

Math.isPrimitive=function() {
"use strict";
var isNumberPrimitive=true;
var i;
if (arguments[0] !==Math.round(arguments[0])) {
isNumberPrimitive=false;
}
if (arguments[0]<2) {
isNumberPrimitive=false;
}
for (i=2;i<=Math.sqrt(arguments[0]);i++) {
if (arguments[0]%i==0) {
isNumberPrimitive=false;
}
}
return isNumberPrimitive;
};

Math.getFloatDigits=function() {
"use strict";
arguments[0]=Math.abs(arguments[0]-parseInt(arguments[0]));
return arguments[0];
};

Math.factors=function() {
"use strict";
var i;
var Factors=[];

if (arguments[0]<=0) {
return "Error:The Passed Number Must Be Positive And Not Equal To Zero";
}

else if (arguments[0]!==Math.round(arguments[0])) {
return "Error:A Float Number Cannot Be Factored";
}

else {
for (i=1;i<=arguments[0];i++) {
if (arguments[0]%i==0) {
Factors.push(i);
}
}
return Factors;
}
};

Math.factorsNegative=function() {
"use strict";
var i;
var j;
var Factors=[];

if (arguments[0]!==Math.round(arguments[0])) {
return "Error:A Float Number Cannot Be Factored";
 
}

else {
for (i=1;i<=arguments[0];i++) {
if (arguments[0]%i==0) {
Factors.push(i);
}
}

for (j=1;j<=arguments[0];j++) {
if (arguments[0]%j==0) {
Factors.push((-1)*j);
}
}
 return Factors;
}

};

/* v2.0 */
Math.getRemainder=function() {
"use strict";
return Math.floor(arguments[0])%Math.floor(arguments[1]);
};

Math.randomPercentage=function() {
"use strict";
return Math.floor(Math.random()*100);
};

Math.randomUntil=function() {
"use strict";
return Math.floor(Math.random()*arguments[0]);
};

Math.Trigonometric={
toRadian:function() {
return arguments[0]*(Math.PI/180);
},
toDegree:function() {
return arguments[0]*(180/Math.PI);
},
sin:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
result+=Math.pow((-1),i)*Math.pow(arguments[0],2*(i)+1)/Math.factorial(2*(i)+1);
}
return result.toFixed(20);
},
cos:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
result+=Math.pow((-1),i)*Math.pow(arguments[0],2*(i))/Math.factorial(2*(i));
}
return result.toFixed(20);
},
tan:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
var numerator=0;
var denominator=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
numerator+=(Math.pow((-1),i)*Math.pow(arguments[0],2*(i)+1)/Math.factorial(2*(i)+1));
denominator+=(Math.pow((-1),i)*Math.pow(arguments[0],2*(i))/Math.factorial(2*(i)));
}
return (numerator/denominator).toFixed(20);
},
cot:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
var numerator=0;
var denominator=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
numerator+=(Math.pow((-1),i)*Math.pow(arguments[0],2*(i)+1)/Math.factorial(2*(i)+1));
denominator+=(Math.pow((-1),i)*Math.pow(arguments[0],2*(i))/Math.factorial(2*(i)));
}
return (denominator/numerator).toFixed(20);
},
sec:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
result+=Math.pow((-1),i)*Math.pow(arguments[0],2*(i))/Math.factorial(2*(i));
}
return (1/result).toFixed(20);
},
cosec:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
result+=Math.pow((-1),i)*Math.pow(arguments[0],2*(i)+1)/Math.factorial(2*(i)+1);
}
return (1/result).toFixed(20);
},
csc:function() {
"use strict";
 if (Math._GLOBAL_.Trigonometric.angleUnit.toUpperCase()=="DEGREE") {
arguments[0]=Math.Trigonometric.toRadian(arguments[0]);
}
 
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Trigonometric.resolution;i++) {
result+=Math.pow((-1),i)*Math.pow(arguments[0],2*(i)+1)/Math.factorial(2*(i)+1);
}
return (1/result).toFixed(20);
}
};

Math.ln=function() {
"use strict";
var i;
var result=0;
if (arguments[0]<=0) {
result="Error:Cannot Calculate The Natural Logarithm For A Negative Number";
}
else if ((arguments[0]>0 && arguments[0]<2) || (arguments[0]>=3/2 && arguments[0]<2)) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow(-1,i-1)*Math.pow(arguments[0]-1,i)/i;
}
result=result.toFixed(20);
}
else if (arguments[0]>=2) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow((arguments[0]-1)/(arguments[0]),i)/i;
}
result=result.toFixed(20);
}
return result;
};

Math.log=function() {
"use strict";
var i;
var result=0;
if (typeof arguments[1]=="undefined") {
if (arguments[0]<=0) {
result="Error:Cannot Calculate The Natural Logarithm For A Negative Number";
}
else if ((arguments[0]>0 && arguments[0]<2) || (arguments[0]>=3/2 && arguments[0]<2)) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow(-1,i-1)*Math.pow(arguments[0]-1,i)/i;
}
result=result.toFixed(20);
}
else if (arguments[0]>=2) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow((arguments[0]-1)/(arguments[0]),i)/i;
}
result=result.toFixed(20);
}
return result;
}
else {
if (arguments[0]<=0) {
result="Error:Cannot Calculate The Logarithm For A Negative Number";
}
else if ((arguments[0]>0 && arguments[0]<2) || (arguments[0]>=3/2 && arguments[0]<2)) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow(-1,i-1)*Math.pow(arguments[0]-1,i)/(i*Math.ln(arguments[1]));
}
result=result.toFixed(20);
}
else if (arguments[0]>=2) {
for (i=1;i<=Math._GLOBAL_.Logarithmic.resolution;i++) {
result+=Math.pow((arguments[0]-1)/(arguments[0]),i)/(i*Math.ln(arguments[1]));}
result=result.toFixed(20);
}
return result;
}
};

Math.exp=function() {
"use strict";
var i;
var result=0;
if (typeof arguments[1]!=="undefined" && arguments[0]<0) {
return "Error:Math.exp Doesn't Support Negative Basis.";
}
else if (typeof arguments[1]=="undefined") {
for (i=0;i<=Math._GLOBAL_.Exponential.resolution;i++) {
result+=(Math.pow(arguments[0],i)/Math.factorial(i));
}
return result.toFixed(20);
}
else {
for (i=0;i<=Math._GLOBAL_.Exponential.resolution;i++) {
result+=(Math.pow(Math.log(arguments[0]),i)*Math.pow(arguments[1],i)/Math.factorial(i));
}
return result.toFixed(20);
}
};

Math.e=function() {
"use strict";
var i;
var result=0;
for (i=0;i<=Math._GLOBAL_.Exponential.resolution;i++) {
result+=Math.pow(arguments[0],i)/Math.factorial(i);
}
return result.toFixed(20);
};

Math.isPositive=function() {
"use strict";
if (arguments[0]>0) {
return true;
}
else {
return false;
}
};

Math.isNegative=function() {
"use strict";
if (arguments[0]<0) {
return true;
}
else {
return false;
}
};

Math.PositiveOrNegative=function() {
"use strict";
if (arguments[0]>0) {
return "Positive";
}
else if (arguments[0]<0) {
return "Negative";
}
else if (arguments[0]==0) {
return "0 Is Non Positive Nor Negative";
}
};

})();