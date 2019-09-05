import { SEARCH } from '../actions/SearchActions';
const initialState = {error: false}

export default function search(state=initialState, action) {
    switch(action.type) {
        case SEARCH.ERROR:
            console.log('helloworld')
            console.log(state)
            return Object.assign({}, state, {error: true});
        default:
            return state;
    }
}