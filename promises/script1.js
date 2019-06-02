//Callback vs. Promises


const watchingCatVids = false
const watchingDogVids = true


// function moodCallBack(callback , errorCallback) {
// 	if(watchingCatVids){
// 		callback({
// 			name: 'Happy',
// 			message: ': cats > everything else'
// 		})
// 	}

// 	else if (watchingDogVids){
// 		callback({
// 			name: 'Happy',
// 			message: ':cats > dogs > everything else'
// 		})
// 	}

// 	else {
// 		errorCallback('Sad')
// 	}
// }

// moodCallBack((success) => { console.log(success.name  + ' ' + success.message) 

// }, (error) => {
//    console.log('Fail:' + error)
// })




function moodPromise() {

	return new Promise((resolve, reject) =>{


		if(watchingCatVids){
		resolve({
			name: 'Happy',
			message: ': cats > everything else'
		})
	}

	else if (watchingDogVids){
		resolve({
			name: 'Happy',
			message: ':cats > dogs > everything else'
		})
	}

	else {
		reject('Sad')
	}


	})
	
}

moodPromise().then((success) => { console.log(success.name  + ' ' + success.message) 

}).catch( (error) => {
   console.log('Fail:' + error)
})

