import { removeCar } from "../store";
import { useSelector, useDispatch } from "react-redux";
const CarList = () => {
	const dispatch = useDispatch();

	const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
		const filteredCars = data.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		return {
			cars: filteredCars,
			name: form.name,
		};
	});
	const handleCarDelete = (car) => {
		dispatch(removeCar(car.id));
	};
	const renderedCars = cars.map((car) => {
		//DECIDE IF THE CAR SHOULD BE BOLD
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

		return (
			<div
				key={car.id}
				className={`bg-slate-800 flex relative h-[200px] panel ${
					bold && "bold"
				}`}>
				<p className='text-[30px] mx-auto text-slate-300 my-auto'>
					{car.name} - ${car.cost}
				</p>
				<button
					className='button is-danger absolute top-2 right-2'
					onClick={() => handleCarDelete(car)}>
					Delete
				</button>
			</div>
		);
	});
	return (
		<div className='grid  sm:grid-cols-2  lg:grid-cols-3 gap-1 p-2 '>
			{renderedCars}
			<hr />
		</div>
	);
};

export default CarList;
