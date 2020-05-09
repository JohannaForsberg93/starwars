import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
	const [state, setState] = useState([]);

	useEffect(() => {
		function getPersons() {
			console.log("Nu är jag i getPersons-funktionen");
			let url = "https://swapi.dev/api/people/";

			axios
				.get(url)
				.then((response) => {
					// console.log("This is the response", response);
					// console.log("Response.data", response.data);
					// console.log("Response.data.next", response.data.next);
					// console.log("Response.data.count", response.data.count);

					// while (response.data.next != null || undefined) {
					// 	url = response.data.next;
					// 	console.log("Detta är värdet av url i while-loopen", url);
					// }

					setState(response.data.results); //state får värdet av results, 10 första namn
					console.log("Värdet av state är nu", state); //Varför undefined????
				})
				.catch((error) => {
					console.log("Something went wrong", error);
				});
		}
		getPersons();
	}, []);
	//Här börjar template-------------------------------------------------------
	return (
		<div>
			<h2>Search-component</h2>
			<ul>
				{state.map((item) => (
					<li key={item.id}>
						Character: {item.name} Gender: {item.gender}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Search;

// function showPeople({ people }) {
// 	console.log("Värdet av people är", people);
// 	return <div>{people}</div>;
// }
