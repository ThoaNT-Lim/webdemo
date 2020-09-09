import { ACTION_SEARCH } from './const';

export const search = (words) => {
    return {
        type: ACTION_SEARCH.SEARCH,
        words
    }
}

export const filter = (types) => {
    return {
        type:  ACTION_SEARCH.FILTER,
        types
    }
}