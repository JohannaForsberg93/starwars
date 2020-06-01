import React from "react";
import Nav from "./Nav";
import "../header.css";

const Header = ({ favorites, created }) => {
	return (
		<div>
			<h1 className="header-style">Star Wars API</h1>
			<Nav favorites={favorites} created={created} />
		</div>
	);
};

export default Header;
