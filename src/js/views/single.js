import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let data = store[params.type][params.theid]
	console.log(data);
	return (
		<div className="jumbotron">
			
			{params.type == "characters" ?
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className="singleText">
							{data.name}
							</h1>
							<p className="singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">Birth</th>
										<th scope="col">Gender</th>
										<th scope="col">Height</th>
										<th scope="col">Skin-color</th>
										<th scope="col">Mass</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{data.name}</td>
										<td>{data.birth_year}</td>
										<td>{data.gender}</td>
										<td>{data.height}</td>
										<td>{data.skin_color}</td>
										<td>{data.mass}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div>
				
				:
				params.type == "planets" ?
					<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className="singleText">
							{data.name}
							</h1>
							<p className="singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
									<th scope="col">Name</th>
										<th scope="col">Climate</th>
										<th scope="col">Terrain</th>
										<th scope="col">Population</th>
										<th scope="col">Diameter</th>
										<th scope="col">Gravity</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{data.name}</td>
										<td>{data.climate}</td>
										<td>{data.terrain}</td>
										<td>{data.population}</td>
										<td>{data.diameter}</td>
										<td>{data.gravity}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div> 
					:
					params.type == "vehicles" ?
					<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className="singleText">
							{data.name}
							</h1>
							<p className="singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">Model</th>
										<th scope="col">Cost</th>
										<th scope="col">Speed</th>
										<th scope="col">Passengers</th>
										<th scope="col">Class</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{data.name}</td>
										<td>{data.model}</td>
										<td>{data.cost_in_credits}</td>
										<td>{data.max_atmosphering_speed}</td>
										<td>{data.passengers}</td>
										<td>{data.vehicle_class}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div> :
						<p>data not found</p>}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
