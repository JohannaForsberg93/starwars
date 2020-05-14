import React, { useState } from "react";
import Search from "./Search";
// import Favorite from "./Favorite";

function Nav() {
	const [search, setSearch] = useState(false);

	function showSearch() {
		console.log("Nu körs showSearch-funktionen");
		console.log("Värdet av search är", search);
		setSearch(true);
	}
	return (
		<div className="nav-component">
			<h1>This is Nav</h1>
			<ul className="nav-ul">
				<li onClick={showSearch}>Search</li>
				<li>Favorites</li>
				<li>Create</li>
			</ul>
			<br></br>

			{search ? <Search /> : null}
		</div>
	);
}

export default Nav;

{
	/* <Search /> */
}
