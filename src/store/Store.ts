import { createStore } from "redux";
import { tokensReducer } from "./tokens/TokensReducer";

const store =  createStore(tokensReducer)

export default store;