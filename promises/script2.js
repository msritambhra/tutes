const assignment1 = new Promise((resolve, reject) =>{
	resolve('Assignemnt 1 done')
})


const assignment2 = new Promise((resolve,reject)=> {
	resolve('Assignemnt 2 done')
})

const assignment3 = new Promise((resolve,reject)=> {
	resolve('Assignemnt 3 done')
})


//If we want to do something after doing all the 3 assignements
// and we want to run all 3 of these in parallel
// so we dont have to worry about waiting for 1 
//before we start the next, we use: 

Promise.all([
	assignment1, assignment2, assignment3

]).then((outputs) =>{
	console.log(outputs)
})

//If we want to do something as soon as one of our 
//assignemnts is done , we use 
// Promise.race()
// so therefore it will only return a single output/message
//instead of an array of all the outputs/messages