const common = {
	_debounce : function(cb,delay){
		let timeout;
		return function(){
			let context = this;
			let args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				cb.apply(context,args);
			}, delay);
		}

	},
	
	_throttle : function(cb,delay){
		let flag = true;
		return function(){
			let context = this;
			let args = arguments;
			if(flag){
				cb.apply(context,args);
				flag = false;
				setTimeout(function(){
					flag = true;
				},delay);
			}
		}
	}
}

export default common;