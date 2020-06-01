import React, { useState } from "react";
import Favorite from "./Favorite";
import "../nav.css";

function Nav({ favorites, created }) {
	const [showFav, setFav] = useState(false);
	function showFavoriteComponent() {
		setFav(true);
	}
	return (
		<div>
			<div className="nav-component">
				<button onClick={showFavoriteComponent}>
					Favorites
					<span role="img" aria-label="heart">
						❤️
					</span>
				</button>

				{showFav ? <Favorite favorites={favorites} created={created} /> : null}
			</div>
		</div>
	);
}

export default Nav;
