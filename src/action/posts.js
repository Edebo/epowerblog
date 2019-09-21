export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR';

export const loadPostsStart =() => ({
	type: LOAD_POSTS_START });
export const loadPostsSuccess = posts => ({
	type: LOAD_POSTS_SUCCESS,
	posts
});
export const loadPostsError =() => ({
    type: LOAD_POSTS_ERROR });
    



