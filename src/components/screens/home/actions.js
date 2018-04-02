import axios from 'axios';
import * as types from '../../../constants/actionTypes';
import { API_URL } from '../../../constants/api';


export function retrievePostsSuccess(res) {
	return {
		type: types.RETRIEVE_POSTS_SUCCESS,
		posts: res.data
	};
}

export function retrievePosts(page) {
	return function (dispatch) {
		return axios.get(`${API_URL}/posts?page=${page}`)
		.then(res => {
			console.log("got results", res);
			dispatch(retrievePostsSuccess(res));
		})
		.catch(error => {
			console.log('Now ', error); //eslint-disable-line
		});
	};
}