import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import styles from "../styles/header.module.css";

const colors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "purple",
  "yellow",
  'orange',
  "grey",
  "pink",
  "brown",
  'darkblue',
  'deeppink',
  'aqua'
];

export default function ColorSelector() {
  const [globalState, setGlobalState] = useContext(GlobalContext)
  const currentColor = globalState.color

    function handleClick(e) {
      const color = e.target.dataset.name
      setGlobalState(state => {
        return {...state, color}
      })
    }

  return (
    <div className={styles["color-container"]}>
      {colors.map((color) => {
        return (
          <div
            className={
              `${styles["color"]} ${currentColor === color ? styles['color-selected'] : ''}`
              }
            style={{ backgroundColor: color }}
            data-name={color}
            onClick={handleClick}
          ></div>
        );
      })}
    </div>
  );
}
