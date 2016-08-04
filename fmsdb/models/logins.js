/**
 * Created by Nana on 17/06/16.
 * Chart of Accounts  Model
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var LoginSchema = new Schema({
	created:{
		type: Date, 
		default: Date.now
	},
	username:String,  
	password:String,
	account_number:String, 
	account_name: String, 
	level: String 
}); 

module.exports=mongoose.model('Login', LoginSchema);