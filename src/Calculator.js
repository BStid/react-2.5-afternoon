import React from "react";

function Calculator(props) {
  let mathAnswer = 0;
  if (props.math === "add") {
    mathAnswer = parseInt(props.number1) + parseInt(props.number2);
  } else if (props.math === "subtract") {
    mathAnswer = props.number1 - props.number2;
  } else if (props.math === "divide") {
    mathAnswer = props.number1 / props.number2;
  } else if (props.math === "multiply") {
    mathAnswer = props.number1 * props.number2;
  } else {
    mathAnswer = 0;
  }
  return (
    <div>
      <select
        id="optionSelect"
        onChange={e => props.mathMethod(e.target.value)}
      >
        <option value="">---Select an Option---</option>
        <option key="0" value="add" id="add">
          Add
        </option>
        <option key="1" value="subtract">
          Subtract
        </option>
        <option key="2" value="multiply">
          Multiply
        </option>
        <option key="3" value="divide">
          Divide
        </option>
      </select>

      <br />
      <br />
      <input
        placeholder="Number 1"
        type="number"
        onChange={e => props.handleChange("number1", e.target.value)}
      />
      <input
        placeholder="Number 2"
        type="number"
        onChange={e => props.handleChange("number2", e.target.value)}
      />
      <br />
      <br />
      {mathAnswer}
    </div>
  );
}

export default Calculator;
