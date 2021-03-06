/*
*sy-math.js v1.0 By Eyad Syria-lover
*A JavaScript Library That Extends The Math Object With Some Powerful Methods 
*Instructions Can Be Found At 
http://github.com/Eyad-Syrialover/sy-math
*This Software Is Licensed Under The Terms Of WTFPL License:
--------------------------------------------------------------
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE                     Version 2, December 2004  Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>  Everyone is permitted to copy and distribute verbatim or modified  copies of this license document, and changing it is allowed as long  as the name is changed.             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION   0. You just DO WHAT THE FUCK YOU WANT TO. 
--------------------------------------------------------------

*/

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
