import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
	const [state, setState] = useState([]);
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState([]);

	//Sökfunktion------------------------------------------------------------
	useEffect(() => {
		setFiltered(
			state.filter((element) =>
				element.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search]);

	// Api-anrop-------------------------------------------------------------------
	useEffect(() => {
		function getPersons() {
			let url = "https://swapi.dev/api/people/?page=";
			let i;
			for (i = 1; i <= 9; i++) {
				axios
					.get(url + i)
					.then((response) => {
						setState(response.data.results);
					})
					.catch((error) => {
						console.log("Something went wrong", error);
					});
			}
		}
		getPersons();
	}, []);

	console.log("Värdet av state", state); //state har värdet av alla personer men visar bara 10 i taget

	// Template ------------------------------------------------------------------
	return (
		<div>
			<h2>Search-component</h2>
			<br />
			<input
				type="text"
				placeholder="Sök efter person"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<ul>
				{filtered.map((person) => (
					<li key={person.name}> Name: {person.name}</li>
				))}
			</ul>
			<ul>
				{state.map((person) => (
					<li key={person.name}>Name: {person.name}</li>
				))}
			</ul>
			<br />

			<br />
		</div>
	);
}

{
	/* 
// 	console.log("Värdet av people är", people);
// 	return <div>{people}</div>;
// }

// searchSpace = (event) => {
// 	console.log("Värdet av event", event);
// 	let keyword = event.target.value;
// 	console.log("värdet av keyword", keyword);
// 	setState(keyword);
// };
// searchSpace(); */
}

export default Search;
