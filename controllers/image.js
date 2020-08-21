
const Clarifai = require('clarifai');


const app = new Clarifai.App({
 apiKey: '8b5feb8ef4b441e1aa410ec51350e7bb'
});

const handleApiCall = (req,res) => {

	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data=>{
		res.json(data);
	}).catch(err=> res.status(400).json('unable to work with api'))


}

const handleImage = (req,res,db)=>{


	const {id} = req.body;
	db('users').where('id','=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries=>{
		res.json(entries[0]);
	}).catch(error=> res.status(400).json('nope nigga'))


}



module.exports = {

	handleImage: handleImage,
	handleApiCall: handleApiCall
}