import React from "react";
import "../favorite.css";
// name, skill, skin
function Favorite({ favorites }) {
	// console.log("Värdet av input", input);
	// console.log("Värdet av favorite", favorites);
	return (
		<div className="favorite-wrapper">
			<div>
				<h1>Star wars favorites</h1>
				<div className="fav-wrapper">
					{favorites.map((person) => (
						<div className="fav-style" key={person.id}>
							<h2>{person.name}</h2>
							Eye color: {person.eye_color} <br />
							Hair color: {person.hair_color}
							<br />
							Gender: {person.gender}
							<br />
						</div>
					))}
				</div>
			</div>

			<h2>Your favorites</h2>
			<div className="fav-wrapper">
				<div className="fav-style">
					<h2>{favorites.name}</h2>
					<br></br>
					Special skill: {favorites.skill}
					<br></br>
					Skin texture: {favorites.skin}
				</div>
				<div className="fav-style">
					<h2>Moe</h2>
					<p>Special skill: Eating super fast</p>
					<p>Skin texture: Baby soft</p>
				</div>
			</div>
		</div>
	);
}

export default Favorite;
