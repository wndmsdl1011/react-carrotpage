import React from "react";

export default function Header({ title, onChangeMode }) {
  return (
    <header>
      <h1>
        <a href="/" onClick={(event) => {
          event.preventDefault();
          onChangeMode();
        }}>{title}</a>
      </h1>
    </header>
  );
}