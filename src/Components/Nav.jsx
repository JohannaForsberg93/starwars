import React, { useState } from "react";
import Favorite from "./Favorite";
import "../nav.css";

function Nav({ favorites, input }) {
	const [showFav, setFav] = useState(false);
	function showFavoriteComponent() {
		setFav(true);
	}

	return (
		<div>
			<div className="nav-component">
				{/* <h1>This is Nav</h1> */}

				<button onClick={showFavoriteComponent}>
					Favorites{" "}
					<span role="img" aria-label="heart">
						❤️
					</span>
				</button>

				{showFav ? <Favorite favorites={favorites} input={input} /> : null}
			</div>
		</div>
	);
}

export default Nav;
