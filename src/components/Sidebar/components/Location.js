import React,{useEffect , useState} from 'react';
import axios from 'axios';

export default function Location() {
	const [name, setName]=useState("");
	const saveName= () =>{
		console.warn({name});
		let data= {name}
		axios.post(`https://hrapplicationapi.azurewebsites.net/v1/Caste`,{name})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}
	return (
		<div>
			<p>hii</p>
			<input type ="text"  value={name} onChange={(e)=>{setName(e.target.value)}} name= "name" />
			<button type ="button" onClick={saveName} > save </button>
		</div>
	)
}