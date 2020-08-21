
const handleProfile = (req,res,db) =>{

	const {id} = req.params;
	
	db.select('*').from('users').where({
		id: id
	}).then(user=> {
		if(user.length){
		res.json(user[0])
		} else{

			res.status(400).json('no such user')
		}
	
	}).catch(err=> resp.status(400).json('error finding user'))


}

module.exports = {

	handleProfile:handleProfile
}