import React from "react";
import "../favorite.css";

function Favorite({ favorites, created }) {
	return (
		<div className="favorite-wrapper">
			<div>
				<h1>Star wars favorites</h1>
				<div className="fav-wrapper">
					{favorites.map((person, index) => (
						<div className="fav-style" key={index}>
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
			<h1>Created favorites</h1>
			<div className="fav-wrapper">
				{created.map((character) => (
					<div className="fav-style" key={character.alias}>
						<h2>{character.alias}</h2>
						Special skill: {character.skill} <br />
						Skin texture: {character.skin}
						<br />
						<img src={character.img} alt="created character" />
						<br />
					</div>
				))}
			</div>
		</div>
	);
}

export default Favorite;
