import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import styles from '../styles/header.module.css'
import ColorSelector from './colorSelector'

export default function Header() {
    const [globalState, setGlobalState] = useContext(GlobalContext)
    const [inputColorValue, setInputColorValue] = useState('#000')

    function handleChange(e) {
        const option = +e.target.value

        setGlobalState(state => {
            return {...state, lineWidth: option}
        })
    }

    function handleColorInputChange(e) {
        setInputColorValue(e.target.value)

        setGlobalState((state) => {
          return { ...state, color: e.target.value };
        });
    }

    return (
      <header className={styles["header"]}>
        <h1>Fractails</h1>
        <ColorSelector />
        <input className={styles['color-selector']} onChange={(e)=> {
            handleColorInputChange(e)
        }} type="color" value={inputColorValue} name="" id="" />
        <label className={styles["width-select"]}>
          Largura:
          <select name="width-selector" id="larg" onChange={handleChange}>
            <option value="1">1</option>
            <option value="1.25">1.25</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </label>
      </header>
    );
}
