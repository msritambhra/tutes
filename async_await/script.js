//Makes Promises easier to work with

function makeRequest(location){
	return new Promise((resolve,reject)=> {
		console.log(`Making Request To ${location}`)
		if(location==='Google')
			resolve('Google says Hi')
		else
			reject('We can only talk on Google')
	})
}


function processRequest(response) {
 	return new Promise((resolve, reject) => {
 		console.log('Processing Request')
 		resolve(`Extra Info + ${response} `)
 	})
 } 


// makeRequest('Google').then(message =>{
// 	console.log('Response Received')
// 	return processRequest(message)

// }).then(processedMessage =>{
// 	console.log(processedMessage)
// }).catch(err =>{
// 	console.log(err)
// })

// We need to have a function in which our awaiting code is inside of
//await : tells that code should wait until the 
//await method is done
//As soon as JS hits an await statement it will leave the 
//await func, do other work inside of program and then as
//soon as the await func is done it will come back there 
async function work(){
	try{
			const message = await makeRequest('Google')
    console.log('Response received')
    const processedMessage = await processRequest(message)
	console.log(processedMessage)

	} catch(err){
		console.log(err)
	}
	

}

work()
