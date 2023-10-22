import chirpzListAction from "../actions/chirpzListActions";

const initialState ={
    chirpzListData : {},
    loaderChirpzPost: false
}

export default (state=initialState, action:any) => {
    switch(action.type){
        case chirpzListAction.SET_CHIRPZ_LIST :
            const { chirpzListData } = action;
            return{...state, chirpzListData};
        case chirpzListAction.SET_CHIRPZ_LIST_POST:
            const { chirpzListDataPost } = action;
            return{...state, chirpzListDataPost};
            case chirpzListAction.SHOW_LOADER_CHRIPZ_POST:
            return{...state, loaderChirpzPost: true};
            case chirpzListAction.HIDE_LOADER_CHRIPZ_POST:
            return{...state, loaderChirpzPost: false};
        default:
            return state;
    }
}