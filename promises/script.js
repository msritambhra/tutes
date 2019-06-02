// Promises are like real promises. "I commit to do something"
// 2 cases: either the promise is completed/resolved or it fails/gets rejected
// Syntax:
// var promise = new Promise(function(resolve, reject){
//      //do something
// });

// .then(function(result){
//         //handle success
//     }, function(error){
//         //handle error
//     }) OR using catch ( which is better way to handle reject case)
//they are great when you need to do something in the 
//background such as downloading an image from a server
// and you want to do something after its complete instead
// of making everything else wait for it


let p = new Promise((resolve, reject) =>{
	let a =1 + 1 ;
	if (a==2){
		resolve('Success')
	}

	else{

		reject('Fail')
	}
})

p.then((message) => {
	console.log('This is in the then : ' + message)

}).catch((message) => {
	console.log('this is in the catch : ' + message)
})