const plog = (toLog: any) => console.log(toLog)

let varSub = "varIter";
let varMain = {};
plog(varMain)
plog(typeof(varMain))
varMain[varSub] = 123;
plog(varMain);
plog(varMain.varIter);

for(var i=0; i<10; i++) {
    varMain.varIter = i;
    varMain[varSub] = i;
    plog(varMain);
    plog(varMain[varSub]);
}

plog((varMain))

var sexy = new Array(10, 20, 30, 40, 50);
plog(sexy)
plog(sexy.length)
plog(sexy[0])
plog(sexy[1])
plog(sexy[2])
plog(sexy[3])
plog(sexy[4])

for(var i=0; i<sexy.length; i++) {
    sexy[i] = i;
}

//
// var myVariable = "coco";
// window[myVariable] = "riko";
//
// console.log(coco); // display : riko