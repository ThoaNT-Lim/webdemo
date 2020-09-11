import { search } from "./action";

const initizalize = {
    contents: ['name 1', 'name 2', 'name 3', 'name 4', 'name 5', 'name 1'],
     value: '', 
     works: []
    };
const searchReducer = (state = initizalize, action) => {
    switch (action.type) {
        case 'SEARCH': {
            const value = action.words;
            const works = state.contents.filter((val) => val.includes(value));
            
            console.log(works, 're');
            //  works = state.contents.type.filter((val) => val.includes(value));
            return {...state, value, works};
        }
        default:
            return state;
    }
} 

export default searchReducer;