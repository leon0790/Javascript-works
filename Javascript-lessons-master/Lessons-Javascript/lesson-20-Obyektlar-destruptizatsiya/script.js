'use strict'

const theif = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "gray",
        style: "curly",
    },
    howOut: function (){
        console.log("Fast with help doors");
    },
};

theif.howOut();
console.log(Object.keys(theif));

// destruptizatsiya
const {hair, style} = theif.colors;
console.log(hair);
console.log(style);


for (let k in theif) { // in objectlar bilan ishlaydi // of arraylar bilan ishlaydi
    if (typeof theif[k] === "object") {
        for (let i in theif[k])
            console.log(`Property ${i} has value ${theif[k][i]}`);
    }
    else if (typeof theif[k] === "function"){
        console.log(theif.howOut());
    }
    else {
        console.log(`Property ${k} has value ${theif[k]}`);
    }
}



