// 1.4 Palindrome Permutation
// Given a string check to see if the string is a palindrome, spaces and 
// Plaindrome: It's tje same backwards as it is forwards: taco cat


// Looks at 2 specific strings

const palindrome = (pal,str) => {
    // removes sapces, and all unique characters
    pal = pal.replace(" ", "").replace(/[^a-z0-9]/gi, '').toLowerCase()
    str = str.replace(" ", "").replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    if(pal.length != str.length ){
        return false
    }else{
        let runner = pal.length -1;
        for(let i=0;i<Math.ceil(pal.length);i++){
            if(pal[i] != str[runner]){
                return false;
            }
            runner--;
        }
        return true
    }
}

console.log(palindrome("Tact Coa!", "aoct Cat!!!"));