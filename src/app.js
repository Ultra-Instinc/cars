import CarList from "./components/carList";
import CarSearch from "./components/carSearch";
import CarValue from "./components/carValue";
import CarForm from "./components/carForm";
const App = () => {
	return (
		<div className='relative mx-auto'>
			<div className='w-full lg:w-2/3 mx-auto rounded-lg overflow-hidden'>
				<CarForm />
			</div>
			<div className='w-full lg:w-2/3 mx-auto rounded-lg overflow-hidden my-2'>
				<CarSearch />
			</div>
			<div className='w--full mx-2  '>
				<CarList />
			</div>
			<div className='fixed bottom-8 right-8 bg-slate-800 rounded-lg shadow-md shadow-emerald-700 p-3 text-emerald-600 font-bold'>
				<CarValue />
			</div>
		</div>
	);
};

export default App;
