import React, { Component, useState } from "react";
import "../styles/App.css";
export default function Welcome(props) {
  const l = props.name;
  return (
    <div>
      <h1>Hey ! {l}</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
}
