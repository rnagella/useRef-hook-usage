import React from "react";
import "./styles.css";

export default function App() {
  const nameRef = React.useRef();
  function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    //const username = event.target.elements.nameInput.value
    const username = nameRef.current.value;
    alert(`Hello ${username}!!`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Enter your Name: </label>
        <input ref={nameRef} id="nameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
