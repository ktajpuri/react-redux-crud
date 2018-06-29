
export const logger = store => next => action => {
	console.log('I am loged from middleware');
	return next(action);
}