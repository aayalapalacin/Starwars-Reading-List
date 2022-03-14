import React, {useContext} from "react";
import "../../styles/home.css";
import { DataRow } from "../component/dataRow";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);
	return(
	<div className="text-center mt-5">
		{store.characters.length > 0 && (
					<DataRow title= "Characters" data={store.characters} />
            )}
			{store.planets.length > 0 && (
						<DataRow title= "Planets" data={store.planets}/>
			)}
			{store.vehicles.length > 0 && (
		<DataRow title= "Vehicles" data={store.vehicles}/>
)}
	</div>
	)
	};
	


