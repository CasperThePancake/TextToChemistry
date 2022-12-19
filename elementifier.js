var symbols = ["Ac","Ag","Al","Am","Ar","As","At","Au","B","Ba","Be","Bh","Bi","Bk","Br","C","Ca","Cd","Ce","Cf","Cl","Cm","Cn","Co","Cr","Cs","Cu","Db","Ds","Dy","Er","Es","Eu","F","Fe","Fl","Fm","Fr","Ga","Gd","Ge","H","He","Hf","Hg","Ho","Hs","I","In","Ir","K","Kr","La","Li","Lr","Lu","Lv","Mc","Md","Mg","Mn","Mo","Mt","N","Na","Nb","Nd","Ne","Nh","Ni","No","Np","O","Og","Os","P","Pa","Pb","Pd","Pm","Po","Pr","Pt","Pu","Ra","Rb","Re","Rf","Rg","Rh","Rn","Ru","S","Sb","Sc","Se","Sg","Si","Sm","Sn","Sr","Ta","Tb","Tc","Te","Th","Ti","Tl","Tm","Ts","U","V","W","Xe","Y","Yb","Zn","Zr"]
var string = process.argv[2]
if (!string) {
    console.log("\x1b[31m","ERROR: Enter a string to convert after the operation like this:")
    console.log("\x1b[0m","Node elementifier.js MyString")
    return;
}

var possibles

console.log("")
console.log("Generating element notations for the string '"+string+"'...");
console.log("")

//GENERATE THE THING
//DO THE FIRST PART MANUALLY
function convertToChemicalNotation(text) {
possibles = []
string = text
if (symbols.includes(string[0].toUpperCase())) possibles.push(string[0].toUpperCase())
if (string.length > 1) {
    if (symbols.includes(string[0].toUpperCase()+string[1].toLowerCase())) possibles.push(string[0].toUpperCase()+string[1].toLowerCase())
}
//LOOP THROUGH THE POSSIBILITIES AND KEEP ADDING POSSIBILITIES UNTIL WE NO LONGER CAN
if (possibles.length > 0) {
for (let l = 1; l < string.length; l++) {
    //CHECK IF THE ARRAY IS EMPTY, IF SO THE CONVERSION IS IMPOSSIBLE
    if (possibles.length > 0) {
    for (element of possibles) {
        if (element.length !== string.length) {
            let startIndex = element.length
            //IF THERE IS ONLY ONE CHARACTER LEFT
            if (element.length + 1 == string.length) {
                if (symbols.includes(string[startIndex].toUpperCase())) {
                    possibles[possibles.indexOf(element)] = element+string[startIndex].toUpperCase()
                } else {
                    possibles.splice(possibles.indexOf(element),1)
                }
            //IF THERE ARE MORE CHARACTERS LEFT
            //CHECK IF 1 LONG SYMBOL EXISTS, IF SO PUSH A NEW ELEMENT TO THE ARRAY
            } else {
            if (symbols.includes(string[startIndex].toUpperCase())) {
                possibles.push(element+string[startIndex].toUpperCase());
            }
            //CHECK IF 2 LONG SYMBOL EXISTS, IF SO PUSH A NEW ELEMENT TO THE ARRAY
            if (symbols.includes(string[startIndex].toUpperCase()+string[startIndex+1].toLowerCase())) {
                possibles.push(element+string[startIndex].toUpperCase()+string[startIndex+1].toLowerCase());
            }
            //REMOVE THE OLD ELEMENT FROM THE POSSIBLES ARRAY
            possibles.splice(possibles.indexOf(element),1);
            }
            }
        }
    }
    }
}
if (possibles.length > 1) {
    console.log("Here are the possibilities: "+possibles)
} else if (possibles.length == 1) {
    console.log("There is one possibility: "+possibles[0])
} else {
    console.log("It is impossible to convert the string '"+string+"' to a chemical notation!")
}
}

convertToChemicalNotation(string)
console.log("")