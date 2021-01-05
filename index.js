var moment = require('moment'); 
var request = require('request'); 

const startLoop = () => {
	const doLoop = () => {
		const hour = moment().hour()
		const minute = moment().minute()
		console.log(hour, minute)
		if (hour > 22 || hour < 7) {
			if (hour >= 23 || hour < 4) {
				request(`https://maker.ifttt.com/trigger/set_to_4/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 4 && minute < 30) {
				request(`https://maker.ifttt.com/trigger/set_to_3/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 5 && minute < 15) {
				request(`https://maker.ifttt.com/trigger/set_to_2/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 5 && minute < 30) {
				request(`https://maker.ifttt.com/trigger/set_to_1/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 5 && minute < 45) {
				request(`https://maker.ifttt.com/trigger/set_to_0/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 6 && minute < 15) {
				request(`https://maker.ifttt.com/trigger/set_to_warm1/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			} else if (hour === 6 && minute < 30) {
				request(`https://maker.ifttt.com/trigger/set_to_warm2/with/key/bwiG22DWJ0tmsH9uNIoiCq`, (err, res, body) => {
					console.log(err, body)
				})
			}
		}
		setTimeout(doLoop, 300000)
	}
	doLoop()
}

startLoop()