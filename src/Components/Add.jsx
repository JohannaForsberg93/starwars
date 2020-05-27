import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import "../add.css";
import Nav from "./Nav";
import Header from "./Header";

function Add() {
	const [name, setName] = useState("");
	const [skill, setSkill] = useState("");
	const [skin, setSkin] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log("name", name);
		console.log("skill", skill);
		console.log("skin", skin);
	}
	// console.log("Favorites", favorites);
	// const { register, handleSubmit } = useForm();

	// const onSubmit = (data) => {
	// 	console.log("This is data", data);
	// 	// let characters = JSON.stringify(data);
	// 	localStorage.setItem("character", JSON.stringify(data));
	// 	// localStorage.setItem("lastname", data.lastname);
	// 	// console.log("This is fileList", FileReader);
	// 	return <div>{data.name}</div>;
	// };

	// const showImage = (event) => {
	// 	let img = event.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.onload = function () {
	// 		const img = new Image();
	// 		img.src = reader.result;
	// 		document.body.appendChild(img);
	// 	};

	// 	reader.readAsDataURL(img);
	// };

	return (
		<div className="add-wrapper">
			<h2>Create your own Star Wars character!</h2>
			<br />
			<form onSubmit={handleSubmit}>
				<input
					className="input-style"
					placeholder="Name"
					value={name}
					type="text"
					name="name"
					onChange={(e) => setName(e.target.value)}
				/>
				<br></br>
				<input
					className="input-style"
					placeholder="Skills"
					type="text"
					name="skill"
					value={skill}
					onChange={(e) => setSkill(e.target.value)}
				/>
				<br />
				<input
					className="input-style"
					placeholder="Skin texture"
					type="text"
					name="skin"
					value={skin}
					onChange={(e) => setSkin(e.target.value)}
				/>
				<br />
				<input type="submit" className="add-button" value="Add" />
			</form>
			<Header name={name} skill={skill} skin={skin} />
		</div>
	);
}

export default Add;

// reader.onload = function () {
// 	console.log("reader.result", reader.result);
// 	url = reader.result;
// };

// return (
// 	<div>
// 		<img src={url}></img>
// 	</div>
// );

// console.log("reader", reader.result);

// if (img != undefined || null) {
// 	return <div> img är inte undefined or null</div>;
// }

// const [title, setTitle] = useState({ name: "", lastname: "" });
// const [img, setImg] = useState();

// const handleSubmit = (e) => {
// 	console.log("Körs den här funktionen ens??");
// 	e.preventDefault();
// 	setTitle({ ...title.name, ...title.lastname });

// 	console.log("värdet av firstname är nu", title.name);
// 	console.log("värdet av lastname är nu", title.lastname);
// 	console.log("Värdet av allt i title", title);
// 	setTitle("");
// names = localStorage.setItem("character", { names });
// localStorage.setItem("character", title);
// console.log("Värdet av names", names);
// console.log("Värdet av fileList", FileList);
// setTitle("");

// function saveToStorage() {

// }

// useEffect(() => {
// 	localStorage.setItem("character", title);
// }, [title]);
// console.log("Värdet av title är nu", title);

// function handleChange(e) {
// 	console.log(e);
// 	console.log("Nu körs handleChange-funktionen");
// }

{
	/* <input
					type="file"
					name="image"
					id="image"
					accept="image/*"
					ref={register}
					onChange={showImage}
				/> */
}
