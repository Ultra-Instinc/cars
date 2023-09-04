import {createSlice , nanoid } from '@reduxjs/toolkit'

const carSlice=createSlice({
    name:"car",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm=action.payload
        },
        addCar(state,action){
            //Assumption
            // action.payload === { name: 'ab' , cost : 140  }
            state.data.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            })
        },
        removeCar(state,action){
            //Assumption
            // action.payload === the id of the car we want to remove
            const updated=state.data.filter((car)=>{
                return car.id !== action.payload
            })
            state.data=updated
        }

    }
})
//sending mini reducers to the store so that components work directly with the store
export const {changeSearchTerm,addCar,removeCar} = carSlice.actions
//sending the mega reducer th the 'store/index.js' file 
export const carReducer= carSlice.reducer