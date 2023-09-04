import {changeName , changeCost , addCar} from '../store'
import { useDispatch , useSelector  } from "react-redux";
const CarForm = () => {
    const dispatch=useDispatch()
    const {name,cost}=useSelector((state)=>{
        return {
            name : state.form.name,
            cost : state.form.cost
        }
    })
    const handleNameChange=(e)=>{
        dispatch(changeName(e.target.value))
    }
    const handleCostChange=(e)=>{
        const carCost=parseInt(e.target.value) || 0
        dispatch(changeCost(carCost))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addCar({name,cost}))
        dispatch(changeCost(0))
        dispatch(changeName(""))
    }
    return ( 
    <div className="flex flex-col bg-slate-800 shadow-lg shadow-slate-600 p-2">
     <span className="text-[24px] font-bold mx-auto text-slate-300  " >Add Car</span>
        <form action="" onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="text-[24px] font-bold mx-auto text-slate-300  " htmlFor="">name</label>
                    <input
                        className=" text-[20px] input is-expanded text-blue-500" 
                        type="text" 
                        required
                        value={name} 
                        onChange={handleNameChange}
                    />
                </div>
                <div className="field">
                    <label className="text-[24px] font-bold mx-auto text-slate-300 " htmlFor="">Cost</label>
                    <input
                        className=" text-[20px] input is-expanded" 
                        type="number" 
                        required
                        value={cost || ""} 
                        onChange={handleCostChange}
                    />
                </div>
            </div>
            <div className='justify-end flex pt-3'>
                <button className=' bg-gradient-to-br from-emerald-700 to-slate-500 hover:bg-gradient-to-bl py-3 px-6 text-slate-300 rounded-lg shadow-lg shadow-emerald-800 hover:scale-105 duration-500 hover:font-bold text-[20px]  '> Submit</button>
            </div>
        </form>
    </div> );
}
 
export default CarForm;