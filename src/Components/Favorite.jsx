import React from "react";
import "../favorite.css";
// name, skill, skin
function Favorite({ favorites, input }) {
	// console.log("Värdet av input", input);
	// console.log("Värdet av favorite", favorites);
	return (
		<div className="favorite-wrapper">
			<div>
				<h1 className="header-style">Star wars favorites</h1>
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
					<h2>{input.name}</h2>
					<br></br>
					Special skill: {input.skill}
					<br></br>
					Skin texture: {input.skin}
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
