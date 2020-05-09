// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Search() {
// 	const url = "https://swapi.dev/api/people/";
// 	// const next = [];
// 	const [state, setState] = useState([]);
// 	useEffect(() => {
// 		axios
// 			.get(url)
// 			.then((response) => {
// 				console.log("This is the response", response);
// 				console.log("What is next???", response.data.next);
// 				setState(response.data.results); //state får värdet av results, 10 första namn
// 				if (response.data.next != null) {
// 					useEffect(response.data.next);
// 					console.log("Inuti if-sats");
// 				}
// 			})
// 			.catch((error) => {
// 				console.log("Something went wrong", error);
// 			});
// 	}, []);
// 	console.log("Detta är state", state);
// 	return (
// 		<div className="search-div">
// 			<h2>Search-component</h2>
// 			<ul>
// 				{state.map((state) => (
// 					<li key={state.id}>
// 						Character: {state.name} Gender: {state.gender}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default Search;

// function showPeople({ people }) {
// 	console.log("Värdet av people är", people);
// 	return <div>{people}</div>;
// }

// {
// 	state.map((state) => (
// 		<li key={state.id}>
// 			Character: {state.name} Gender: {state.gender}
// 		</li>
// 	));
// }

//----------------------------------------------------------------------------------------
//Fredag
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Search() {
// 	const [state, setState] = useState([]);

// 	useEffect(() => {
// 		function getPersons() {
// 			console.log("Nu är jag i getPersons-funktionen");

// 			for (let i = 1; i <= 9; i++) {
// 				console.log("värdet av index i", i);
// 				axios
// 					.get("https://swapi.dev/api/people/" + i)
// 					.then((response) => {
// 						console.log("This is the response", response);
// 						console.log("Response.data", response.data);
// 						setState(response.data); //state får värdet av results, 10 första namn
// 						console.log("Värdet av state är nu", state); //Varför undefined????
// 					})
// 					.catch((error) => {
// 						console.log("Something went wrong", error);
// 					});
// 			}
// 		}
// 		getPersons();
// 	}, []);
// 	//Här börjar template-------------------------------------------------------
// 	return (
// 		<div>
// 			<h2>Search-component</h2>
// 			<ul>
// 				{state.map((state) => (
// 					<li key={state.id}>
// 						Character: {state.name} Gender: {state.gender}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default Search;

// function showPeople({ people }) {
// 	console.log("Värdet av people är", people);
// 	return <div>{people}</div>;
// }
