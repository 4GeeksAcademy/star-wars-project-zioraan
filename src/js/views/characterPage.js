import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterPage = () => {
	const { store, actions } = useContext(Context);
    const {character, setCharacter} = useState({});
    const activeCharacter = store.characters[id - 1];
    setCharacter = activeCharacter;
	
    return (
        <div>
            <div>
            <img className="border-bottom border-dark" 
            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
            />
            </div>
        </div>
    )};