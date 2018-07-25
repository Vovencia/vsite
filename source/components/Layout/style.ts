import {_styled as _, styled} from "../../";

module.exports = function(obj){
	return styled(obj)`
		color: #000;
		background: url('${ require('../../assets/images/download.png') }');
	`
}