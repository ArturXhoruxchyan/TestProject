import { combineReducers } from "redux";//sranov menq miacnumenq bolor redusernery mer komponentneri;
import { likesReducer } from "./about/reducer";

const rootReducer=combineReducers({//aystex menq grumenq bolor mer redusernery;
    text: likesReducer,
    likes:likesReducer,
    comments:likesReducer,
})

export default rootReducer;
