import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import PhotoGalleryReducer from "./reducer";

let store = createStore(PhotoGalleryReducer, applyMiddleware(thunk));

store.subscribe(() => store.getState());

export default store;
