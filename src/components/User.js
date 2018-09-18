import React from "react";
import "./User.css";

export default function User({ name }) {
  return <div className="User-header">Привет, {name}</div>;
}
