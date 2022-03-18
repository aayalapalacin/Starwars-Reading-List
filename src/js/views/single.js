import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let data = store[params.type][params.theid]
	console.log(data);
	return (
		<div className="jumbotron">
			<h1>
				{data.name}
			</h1>
			{params.type == "characters" ?
				<div>
					<p>
						Birth Year: {data.birth_year}
					</p>

					<p>
						Skin-Color: {data.skin_color}
					</p>
					<p>
						Mass: {data.mass}
					</p>
				</div>
				:
				params.type == "planets" ?
					<div>
						<p>
							Climate: {data.climate}
						</p>

						<p>
							Terrain: {data.terrain}
						</p>
						<p>
							Population: {data.population}
						</p>
					</div> :
					params.type == "vehicles" ?
						<div>
							<p>
								Cost: {data.cost_in_credits}
							</p>

							<p>
								Capacity: {data.cargo_capacity}
							</p>
							<p>
								Speed: {data.max_atmosphering_speed}
							</p>
						</div> :
						<p>data not found</p>}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
