const collection = require('../MongoConfiguration/DbCollection')
module.exports = {
  getQuestions:async (req,res)=>{
try{
const response = await collection.USERCOLLECTION.find()
console.log(response);
res.json(response)
}catch(err){
  res.json (err)
}
  }
}
  