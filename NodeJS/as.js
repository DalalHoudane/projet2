var path = require('path');
p=path.resolve('.');
console.log(p);
var fs = require('fs');
try{
	fs.mkdirSync('mon dossier');
	console.log('mon dossier crée');
}
  
  catch(err){
	  if(err.code == 'EEXIST')
	  {
		  console.log('le dossier exists');
	  }
	  else{
		  console.log(err);
	  }
  }