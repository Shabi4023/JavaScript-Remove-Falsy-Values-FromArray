// Write a function that removes all falsy values(false, null, "", undefined, and NaN) from an array using filter

const arrayWithFalsyValues = [false, null, "", undefined, NaN, 12, "Shahzaib"];

function removeFalsy(data){
    let result = data.filter(Boolean);
    return result;
}

console.log(removeFalsy(arrayWithFalsyValues));