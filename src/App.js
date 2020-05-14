import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import axios from "axios";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <ul>
					{state.map((state) => (
						<li key={state}>{state.name}</li>
					))}
				</ul> */}
				<Header />
				<Nav />
				{/* <Search /> */}
			</header>
		</div>
	);
}

export default App;
