import {createSlice} from '@reduxjs/toolkit'
import { addCar } from './carSlice'
const formSlice=createSlice({
    name:"form",
    initialState:{
        name:"",
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name=action.payload
        },
        changeCost(state,action){
            state.cost=action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCar,(state,action)=>{
            state.name=""
            state.count=0
        })
    }
})
//sending mini reducers to the store so that components work directly with the store
export const {changeName,changeCost}=formSlice.actions;
//sending the combined big reducer to the 'store/index.js' file
export const formReducer = formSlice.reducer;
