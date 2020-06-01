import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import axios from "axios";
import "./add.css";

function App() {
	const [apiData, setApiData] = useState([]); //Alla personer från api:et
	const [searchValue, setSearchValue] = useState(""); //Sökvärde
	const [filteredValue, setFiltered] = useState([]); //Värdet efter man sökt
	const [apiFavorite, setApiFav] = useState([]); //Star wars-favoriterna
	const [created, setCreated] = useState({
		alias: "",
		skill: "",
		skin: "",
		img: "",
	}); //Egna favoriter
	const [createdFavorite, setCreatedFav] = useState([]); //En array med alla egna favoriter
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setFiltered(
			apiData.filter(
				(element) =>
					element.name.toLowerCase().includes(searchValue.toLowerCase()) ||
					element.eye_color.toLowerCase().includes(searchValue.toLowerCase()) ||
					element.hair_color
						.toLowerCase()
						.includes(searchValue.toLowerCase()) ||
					element.birth_year.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	}, [searchValue, apiData]);

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
			setApiData(array);
		}
		loopFunction();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		setSuccess(true);
		setCreatedFav([...createdFavorite, created]);
		console.log("Värdet av input", created);
		e.target.reset();
	}
	function handleChange(e) {
		setCreated({ ...created, [e.currentTarget.name]: e.currentTarget.value });
	}
	const setImg = (event) => {
		let image = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = function () {
			const imageCode = reader.result;
			setCreated({ ...created, img: imageCode });
		};
	};
	return (
		<div className="App">
			<header className="App-header">
				<Header favorites={apiFavorite} created={createdFavorite} />
			</header>
			<div>
				<br />
				<h2 className="input-h2">
					Search for a Star Wars character by name, eye color, hair color or
					gender
				</h2>
				<div>
					<input
						className="search-component-input"
						type="text"
						required
						placeholder="Search..."
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
				<br />
				<h3 className="style-h3">Or create your own character!</h3>
				<form onSubmit={handleSubmit}>
					<input
						className="input-style"
						required
						placeholder="Name"
						type="text"
						name="alias"
						onChange={handleChange}
					/>
					<br />
					<input
						className="input-style"
						required
						placeholder="Special skill"
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
					<input
						type="file"
						id="image"
						accept=".png, .jpeg, .jpg"
						onChange={setImg}
					></input>
					<br />
					<input type="submit" className="add-button" value="Add" />
					{success ? <h4>Successfully uploaded to Favorites!</h4> : null}
				</form>
				<br />
				<br></br>
			</div>
			<div className="search-wrapper">
				{filteredValue.map((person) => (
					<div key={person.name}>
						<h2>{person.name}</h2>
						Eye color: {person.eye_color} <br />
						Hair color: {person.hair_color}
						<br />
						Gender: {person.gender}
						<br />
						<br />
						<p>Add to favorite</p>
						<button onClick={() => setApiFav([...apiFavorite, person])}>
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
