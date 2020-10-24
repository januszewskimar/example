class Str {

	constructor(str){
	  this.str = str;
	}
	
	getCapitalized(){
	  return this.str.toUpperCase();
	}

	getLowercased(){
	  return this.str.toLowerCase();
	}

	getReversed(){
	  return this.str.split("").reverse().join("");
	}
}

module.exports = Str;
