// Promises are like real promises. "I commit to do something"
// 2 cases: either the promise is completed/resolved or it fails/gets rejected
// Syntax:
let p = Promise((resolve, reject) =>{
	let a =1 + 1 ;
	if (a==2){
		resolve('Success')
	}

	else{

		reject('Fail')
	}
})

p.then((message) => {
	console.log('This is the then ' + message)

}).catch((message) => {
	console.log('this is the catch' + message)
})