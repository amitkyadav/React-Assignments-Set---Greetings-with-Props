import React, { Component, useState } from "react";
import "../styles/App.css";
export default function Welcome(props) {
  const l = props.name;
  return (
    <div>
      Hey !<h1>{l}</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
}
