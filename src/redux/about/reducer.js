import {
    INPUT_TEXT,
    INCREMENT,
    DECREMENT,
    COMENT_CREATE,
    COMMENT_DELETE,
} from "./types";

const initialState = {
    likes: 0,
    text: "",
    comments: [],

}

export const likesReducer = (state = initialState, action) => {
    //cankacat reduser
    //yndhunum e steyty ev eqshny ev veradarcnum e steyt

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            };
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        case INPUT_TEXT:
            return {
                ...state,//katarum enq vichaki kopian
                text: action.text,//tarmacnum enq texty
            }
        case COMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            };
        case COMMENT_DELETE:
            return(()=>{
                const {id}=action;
                const {comments}=state;
                const itemIndex=comments.findIndex((res)=>res.id===id)
                console.log(itemIndex,'itemIdex');

                const nextComments=[
                    ...comments.slice(0,itemIndex),
                    ...comments.slice(itemIndex+1),
                ];
                return{
                    ...state,
                    comments:nextComments,
                    // coments:[...state.comments,action.data]
                }
            })();
        default:
            return state;
    }

}