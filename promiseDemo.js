let emp=[{"id":100,"name":"Ravi","salary":12000},
	{"id":101,"name":"Ram","salary":14000},
	{"id":102,"name":"Raju","salary":16000}]
var obj = new Promise(function(accept,reject){
	accept(emp);
	reject("Error Generated")
})

obj.then(data=>console.log(data)).catch(error=>console.log(error))
console.log("Hi")
console.log("Hello")
console.log("How r you")