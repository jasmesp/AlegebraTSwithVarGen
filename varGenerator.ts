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

function 



//
// var myVariable = "coco";
// window[myVariable] = "riko";
//
// console.log(coco); // display : riko