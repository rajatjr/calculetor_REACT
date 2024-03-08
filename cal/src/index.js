import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Calculator from './class';
import App from "./App";
// import Cal from './classes'

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode>
<App />
<Calculator />
{/* <Cal /> */}
</StrictMode>,
rootElement
);