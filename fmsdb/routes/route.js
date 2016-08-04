/**
 * Created by Sandeep on 01/06/14.
 */

var Client=require('../models/client'), 
Login =require('../models/logins'),

express=require('express');



var router=express.Router();
/* Testing Ms sql */

router.route('/chart_counter')
    .get(function(req,res){
        CategoryCount.find().exec(function(err, chart){
           if(err)
                res.send(err);
           res.json(chart);
       });
    });
router.route('/chart_counter/:id')
    .delete(function(req,res){
        CategoryCount.remove({
            _id: req.params.id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


router.route('/client')
    .post(function(req,res){
        var client=new Client(req.body);
        client.save(function(err, clientel){
            if(err)
                res.send(err);
            res.send(clientel);
        });
    })

router.route('/client/:id')
.delete(function(req,res){
        Client.remove({
            _id: req.params.id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

/* Account approval for 
1. Find client id
2. Increase counter on acct_account_db by 1
3. Update client data with base account
4. Set status of account to approva
 */


module.exports=router;
