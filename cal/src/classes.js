// import React from "react";

// class Cal extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             result:0,
//             num1:"",
//             num2:"",
//         };
//     }

// Num1Change = (e) => {
//     this.setState({
//         num1: e.target.value
//     });
//     };

// Num2Change = (e) => {
//     this.setState({
//         num2: e.target.value
//     });
//     };

// Add = () => {
//     const { num1,num2 } = this.state;
//     if (num1 !== "" && num2 !=="") {
//         const result = parseFloat(num1) + parseFloat(num2);
//         this.setState({result});
//     }
// };

// Subtract = () => {
//     const { num1,num2 } = this.state;
//     if (num1 !== "" && num2 !==""){
//         const result = parseFloat(num1) - parseFloat(num2);
//         this.setState({result});
//     }
// };


// Multiply = () => {
//     const { num1,num2 } = this.state;
//     if (num1 !== "" && num2 !==""){
//         const result = parseFloat(num1) * parseFloat(num2);
//         this.setState({result});
//     }
// };

// Divide = () => {
//     const { num1,num2 } = this.state;
//     if (num1 !=="" && num2 !==""){
//         const result = parseFloat(num1) / parseFloat(num2);
//         this.setState({result});
//     }
// };


// render(){
//     const{ result, num1, num2} = this.state;
//     return(
//         <div>
//             <input type="number" value={num1}onChange={this.Num1Change}/> &nbsp;

//             <input type="number" value={num2}onChange={this.Num2Change}/> &nbsp;

//             <button onClick={this.Add}> + </button> &nbsp;
//             <button onClick={this.Subtract}> - </button> &nbsp;
//             <button onClick={this.Multiply}> * </button> &nbsp;
//             <button onClick={this.Divide}> / </button> &nbsp;
//             <p>Result:{result}</p>
//             </div>
//     );
// }

// }

// export default Cal;