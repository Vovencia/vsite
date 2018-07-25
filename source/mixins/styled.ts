export default {
	checkValue(value){
		switch( (typeof value).toLowerCase() ) {
			case 'number':
				return value + 'px';
			default:
				return value;
		}
	},
	result: function(values: object): string {
		var result = '';
		for(let key of Object.keys(values)) {
			result += `${ key }: ${ this.checkValue(values[key]) };`;
		}
		return result;
	},



	
	size (width, height = width){
		return this.result({
			width,
			height
		})
	}
}