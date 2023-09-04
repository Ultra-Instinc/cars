import { configureStore } from "@reduxjs/toolkit";
import { 
    carReducer , 
    addCar , 
    removeCar , 
    changeSearchTerm 
} from "./slices/carSlice";

import { 
    formReducer , 
    changeCost , 
    changeName
} from "./slices/formSlice";


const store = configureStore({
     reducer:{
        form : formReducer,
        cars : carReducer
     }
})



export {store,addCar,removeCar,changeCost,changeName,changeSearchTerm}
