import * as types from '../../../constants/actionTypes';
import initialState from '../../../reducers/initialState';

export default function (state = initialState.home, action) {
	switch (action.type) {

		case types.RETRIEVE_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts
			};
		default:
			return state;
	}
}