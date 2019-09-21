import initialState from '../store';
import {LOAD_POSTS_START,LOAD_POSTS_SUCCESS,LOAD_POSTS_ERROR} from '../action/posts'

export const postReducer = (state =initialState,action) =>{
        switch(action.type){
             case LOAD_POSTS_ERROR:
                return { ...state,
                    isFetching: false, error: true };
            case LOAD_POSTS_START:
                    return { ...state,
                        isFetching: true, error: false };
            case LOAD_POSTS_SUCCESS:
                return { ...state,
                    isFetching: false ,posts:action.posts};
            default:
                return state;
                }
}