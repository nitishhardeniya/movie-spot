const LS = {
	getData : function(key){
		const res = localStorage.getItem(key);
		return JSON.parse(res);
	},

	setData : function(key,val){
		let str = JSON.stringify(val);
		localStorage.setItem(key,str);
		return true;
	},

	clearAll : function(){
		localStorage.clear();
		return true;
	}
	
};

export default LS;