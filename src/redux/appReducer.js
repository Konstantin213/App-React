import {getAuthUserData} from "./authReducer";

const INISIALIZED_SUCESS = 'INISIALIZED_SUCESS';

let initialState = {
    initialized: false
};
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INISIALIZED_SUCESS :
            return {
                ...state,
                initialized: true
            }
        default :
            return state;
    }
};

export const inisializedSucess = () => ({type: INISIALIZED_SUCESS});

export const inisializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(inisializedSucess());
    })
};

export default appReducer;