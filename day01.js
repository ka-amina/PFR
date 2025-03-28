
// console.log(arr[1].length);
function result(arr){
    const size=arr.length;
    let T;
    for(let i=0;i<size;i++){
        for(let j=i+1;j<size-1;j++){
            if(arr[i]>arr[j]){
                T=arr[i].length;
                j++;
            }
            i++;
        }
        return arr[i];
    }
}
let arr=['a','aa','aaa','aaaaa','aaaa'];
console.log(result(arr));

let newSolution= (myarr)=>{
    myarr.sort();
    return myarr[myarr.length-1]
}
let myarr=['a','aa','aaa','aaaaa','aaaa'];
console.log(newSolution(myarr))
// sort
// math.max

let arr1=[1,0,2,3,4];
let arr2=[3,5,6,7,8,13];
let arr3=[];
const size1=arr1.length;
const size2=arr2.length;
for(let i=0;i<size1;i++){
    for(let j=0;j<size2;j++){
        arr3.push(arr1[i]+arr2[j])
        j++
    }
    i++
}
// arr3=[arr1[0]+arr2[0]];
console.log(arr3)

let newArr = arr.sort();
console.log(newArr);


// Remove Left elements from Array:
//     Write a function to remove specified elements from the left of a given array of elements.
//     Part 1 using built-in-functions
// Part 2 without built-in functions
// input: [ 1, 2, 3]
// expected output: [2, 3]


function deleteleftelt(arr, elmt) {
    let i;
    for( i=0;i<arr.length;i++) {
        if (arr[i] === elmt) {
            break;
        }

    }
    let array = [];
    for(let j = i + 1; j<arr.length;j++) {
        array[array.length] = arr[j];
    }
    return array;
}

// Write a JavaScript function to create an array out of the arrays by creating each possible pair from the arrays.
//
//     Use reduce(), map() and concat() to produce every possible pair from the elements of the two arrays.
//
//     Don't use built-in function

let arr1=[1,8];
let arr2=[a,b];
