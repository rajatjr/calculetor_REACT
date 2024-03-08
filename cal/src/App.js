import React, { useState } from "react";
import './App.css';

const App = () => {
const [count, setCount] = useState("");
const [count2, setCount2] = useState("");
const [res,setres] = useState("")

const handleaddNumber = (e) => {
setCount(e.target.value);
};

<option class="symbol" value=""> Select </option>
const handleaddNumber2 = (e) => {
setCount2(e.target.value);
};

function resetValFunc() {
setres(Number(count)+Number(count2))
}

function resetValFunc1() {
setres(Number(count)-Number(count2))
}

function resetValFunc2() {
setres(Number(count)*Number(count2))
}

function resetValFunc3() {
setres(Number(count)/Number(count2))
}

return (
<div className="App">
<h1>Function Based Calculator</h1>
<input onChange={handleaddNumber} value={count} type="number" placeholder="Enter First Number"/> &nbsp;
<input onChange={handleaddNumber2} value={count2} type="number" placeholder="Enter Secound Number"/>
<br/>
<br/>
<button onClick={resetValFunc}>+</button> &nbsp;
<button onClick={resetValFunc1}>-</button> &nbsp;
<button onClick={resetValFunc2}>*</button> &nbsp;
<button onClick={resetValFunc3}>/</button> &nbsp;
<button onClick={res}> Result: {res}</button>
</div>
);
};

export default App;