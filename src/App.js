import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
// import Nav from "./Components/Nav";
import axios from "axios";
// import Add from "./Components/Add";
import "./add.css";

function App() {
	const [state, setState] = useState([]); //Api-state
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState([]);
	const [favorite, setFavorite] = useState([]); //Star wars-favoriterna
	// const [input, setInput] = useState([]); // Egna favoriter
	const [input, setInput] = useState([]);
	const [newFav, setFav] = useState([]);
	const [success, setSuccess] = useState(false);

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
				array = array.concat(result.data.results); //array får all data från anropet x9
			}
			setState(array);
		}
		// getPersons();
		loopFunction();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		e.target.reset();
		setSuccess(true);
		setFavorite([...favorite, { ...input }, { unreal: true }]); //Davids lösning
		console.log("Värdet av favorite är nu", favorite);
		// setFav({ ...input }, [...newFav]);
		// console.log("Input", input);
		// console.log("Newfav", newFav);
	}
	function handleChange(e) {
		setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
	}
	// input={input}
	return (
		<div className="App">
			<header className="App-header">
				<Header favorites={favorite} />
			</header>

			<div>
				<br />
				<h2 className="input-h2">
					Search for a Star Wars character by name, eye color, hair color or
					gender!
				</h2>
				<div>
					<input
						className="search-component-input"
						// className="input-field"
						type="text"
						required
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				<br />
				<h4 className="style-h4">Or create your own character!</h4>
				<form onSubmit={handleSubmit}>
					<input
						className="input-style"
						required
						placeholder="Name"
						type="text"
						name="name"
						onChange={handleChange}
					/>
					<br></br>
					<input
						className="input-style"
						required
						placeholder="Skills"
						type="text"
						name="skill"
						onChange={handleChange}
					/>
					<br />
					<input
						className="input-style"
						placeholder="Skin texture"
						type="text"
						name="skin"
						onChange={handleChange}
					/>
					<br />
					<input type="submit" className="add-button" value="Add" />
					{success ? <h4>Successfully uploaded to Favorites!</h4> : null}
				</form>

				<br />
				<br></br>
			</div>
			<div className="search-wrapper">
				{filtered.map((person) => (
					<div key={person.name}>
						<h2>{person.name}</h2>
						Eye color: {person.eye_color} <br />
						Hair color: {person.hair_color}
						<br />
						Gender: {person.gender}
						<br />
						<br />
						<p>Add to favorite</p>
						<button onClick={() => setFavorite([...favorite, person])}>
							<span role="img" aria-label="heart">
								❤️
							</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
