import React, { useState, useEffect } from "react";

const Counter = () => {
	// Se declara el estado
	var [seconds, setSeconds] = useState(0);
	/* 	var stateSeconds = useState(0)
	var seconds = stateSeconds[0]
	var setSeconds = stateSeconds[1] */
	// Se usa el hook de efectos
	useEffect(() => {
		// Inicia el intervalo y guarda el id para detenerlo luego
		let interval = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		// Retorna una funcion que detiene el intervalo
		return () => clearInterval(interval);
	}, [seconds]);
	// Se retorna el componente a renderizar
	return (
		<div>
			<h2>{seconds}</h2>
		</div>
	);
};

export default Counter;
