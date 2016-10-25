var express=require('express');
var router=express.Router();

var votes={};

router.post('/vote',(req, res)=>{
	console.log('petición recibida en /vote');
	if(votes[req.body.id]===undefined){
		votes[req.body.id]=1
	}else{
		votes[req.body.id]++;
	}
	res.send({id:req.body.id, votos: votes[req.body.id] });
});

router.get('/votes', (req, res)=>{
	console.log('petición recibida en votes');
	res.json(votes);
})

router.get('/totalVotes', (req, res)=>{
	console.log('petición recibida en totalVotes');
	console.log(votes.length);
	var total=0;
	for(var index of Object.keys(votes)){
		total+=votes[index];
	}
	
	res.json({'total':total});
})

module.exports=router;