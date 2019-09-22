import axios from 'axios';
import {loadPostsStart,loadPostsSuccess,loadPostsError} from './posts'


export const loadPosts = (page) =>
dispatch => {
    dispatch(loadPostsStart());
    return axios
	.get(`https://epower.ng/wp-json/wp/v2/posts?per_page=6&page=${page}`)
	.then(response => dispatch(
		loadPostsSuccess(response.data,page)))
	.catch(() => dispatch(
		loadPostsError()));
};
