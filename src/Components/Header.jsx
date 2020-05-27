import React from "react";
import Nav from "./Nav";
import "../header.css";

const Header = ({ favorites, input }) => {
	return (
		<div>
			<h1 className="header-style">Star Wars API</h1>
			<Nav favorites={favorites} input={input} />
			{/* name={name} skill={skill} skin={skin} */}
		</div>
	);
};

export default Header;
