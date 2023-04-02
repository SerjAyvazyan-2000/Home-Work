import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     list:[]
}


const InputValue = createSlice({
    name:"InputValue",
    initialState,
    reducers:{
        addValue(state ,action){
             state.list = [...state.list,action.payload]
        },
        deleteValue(state,action){
           const list = state.list
            if(list.indexOf(action.payload)){
                 list.splice(action.payload,1)
            }
        }
    }


})
export const {addValue,deleteValue} = InputValue.actions
export default InputValue.reducer