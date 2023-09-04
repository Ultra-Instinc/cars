import { changeSearchTerm } from "../store";
import { useSelector , useDispatch } from "react-redux";
const CarSearch = () => {
    const searchTerm=useSelector((state)=>{
        
        return state.cars.searchTerm
    })
    const dispatch=useDispatch()
    const handlechangeSearchTerm=(e)=>{
        dispatch(changeSearchTerm(e.target.value))
    }
    return ( 
    <div className=" flex flex-col bg-slate-800 shadow-lg shadow-slate-600 p-2 ">
        <h3 className="text-[24px] font-bold mx-auto text-slate-300">My Cars</h3>
        <div className="flex flex-row justify-between my-2 mx-1">
            <label className="text-[24px] font-bold  text-slate-300" htmlFor="">Search</label>
            <input 
                className="text-[30px] w-[60%] text-center" 
                type="text" 
                value={searchTerm}
                onChange={handlechangeSearchTerm}
            />
        </div>
        

    </div> );
}
 
export default CarSearch;