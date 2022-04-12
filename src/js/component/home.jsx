import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import Counter from "./counter.jsx";
import Counterf from "./counterf.jsx";

//create your first component
const Home = () => {
	// Contador con componente funcional (Sin estado)
	var seconds = 0;
	setInterval(() => {
		seconds++;
		ReactDOM.render(
			<Counterf seconds={seconds} />,
			document.querySelector("#counter")
		);
	}, 1000);

	return (
		<div>
			<h1 className="text-center mt-5">
				Contador React - Componente funcional
			</h1>
			<div className="text-center" id="counter"></div>
			<h1 className="text-center mt-5">
				Contador React - Componente con estado
			</h1>
			{/* Componente con estado propio */}
			<div className="text-center">
				<Counter />
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
