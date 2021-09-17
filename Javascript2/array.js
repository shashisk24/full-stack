var country1="US"
var country2="INDIA"
var country3="GERMANY"
var country=["US","INDIA","GERMANY"]
console.log (country)

/*array methods*/
var fruits=["mango","apple","jackfruit"]
console.log(fruits);

//accessing elements//
console.log(fruits[0])
//adding of elements in array//
fruits.push("pomogranates")
console.log(fruits);
//adding elements in begining//
fruits.push("kiwi")
console.log(fruits);
//removing elements in end//
fruits.pop()
console.log(fruits);
//removing elements in begining//
fruits.shift()
console.log(fruits);
//removing elements in middle//
fruits.splice(1,1)
console.log(fruits);
//copying an array//
var s=fruits.slice()
console.log(s)

//array iteration//
//for//
var mystring="javascript"
for (var i=0; i<mystring.length;i++)
{console.log(mystring[i])}

//for-in//
var arr=['A','B','C']
for(letter in arr)
{alert(letter)}

//for-of//
var arr=['j','a','v','a']
for(letter of arr)
{alert(letter)}
