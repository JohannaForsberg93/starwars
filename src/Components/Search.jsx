import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
	const [state, setState] = useState([]);
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		setFiltered(
			state.filter(
				(element) =>
					element.name.toLowerCase().includes(search.toLowerCase()) ||
					element.eye_color.toLowerCase().includes(search.toLowerCase()) ||
					element.hair_color.toLowerCase().includes(search.toLowerCase()) ||
					element.birth_year.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, state]);

	useEffect(() => {
		async function getPersons(i) {
			let url = "https://swapi.dev/api/people/?page=";

			const response = await axios.get(url + i);
			return await response;
		}

		async function loopFunction() {
			let array = [];
			for (let i = 1; i <= 9; i++) {
				const result = await getPersons(i); //result får värdet av vad getPersons returnerar med i som parameter
				array = array.concat(result.data.results); //array får all data från get-request x9
			}
			setState(array);
			console.log("detta är state, array", array);
		}
		loopFunction();

		// function getPersons() {

		// 	// let url = "https://swapi.dev/api/people/?page=";
		// 	// let i;
		// 	// for (i = 1; i <= 9; i++) {
		// 	// 	axios
		// 	// 		.get(url + i)
		// 	// 		.then((response) => {
		// 	// 			console.log(response.data);
		// 	// 			setState(response.data.results);
		// 	// 		})
		// 	// 		.catch((error) => {
		// 	// 			console.log("Something went wrong", error);
		// 	// 		});
		// 	// }
		// }
		// getPersons();
	}, []);

	console.log("Värdet av state", state); //state har värdet av alla personer men visar bara 10 i taget

	return (
		<div className="search-component">
			<h2 className="test">Search-component</h2>
			<br />

			<h4>
				Search for a Star Wars character by name, eye color, hair color or
				gender!
			</h4>
			<input
				className="input-field"
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className="search-wrapper">
				{filtered.map((person) => (
					<div key={person.name}>
						<h2>{person.name}</h2>
						Eye color: {person.eye_color} <br />
						Hair color: {person.hair_color}
						<br />
						Birth year: {person.birth_year}
					</div>
				))}
			</div>
			<br />
			<br />
		</div>
	);
}

export default Search;
