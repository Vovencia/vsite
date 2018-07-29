import styled from 'styled-components';

const wrappedStyled = function(originalComponent, ...args) {
	let result = styled.call(this, originalComponent);


	return result;
}

export {wrappedStyled as default};

// StyledWindow.prototype = Object.create(StyledWindow.prototype)
// StyledWindow.prototype.shouldComponentUpdate = function(){
// 	console.log(this);
// 	return true;
// }
// StyledWindow.prototype.shouldComponentUpdate = function(){
// 	console.log(this);
// 	return true;
// }
// console.log('StyledWindow', StyledWindow.prototype)