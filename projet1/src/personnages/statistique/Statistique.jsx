import { useEffect, useState } from "react";

export const Statistique = () => {
    const [force, setForce] = useState(0);
    const [endurance, setEndurance] = useState(0);
    const [noteGlobale, setNoteGlobale] = useState(0);

    useEffect(() => {
        setNoteGlobale((force+endurance)/2)
    }, [force, endurance])

    const augmentationForce = () => {
        setForce(force + 1);
    }

    const reductionForce = () => {
        setForce(force - 1);
    }

    const augmentationEndurance = () => {
        setEndurance(endurance + 1);
    }

    const reductionEndurance = () => {
        setEndurance(endurance - 1);
    }
    
    return (
        <div>
            <h6>Note Globale : {noteGlobale} </h6>
            <span>Force</span> <button onClick={() => {reductionForce()}}>-</button> {force} <button onClick={() => {augmentationForce()}}>+</button>
            <br />
            <span>Endurance</span> <button onClick={() => {reductionEndurance()}}>-</button> {endurance} <button onClick={() => {augmentationEndurance()}}>+</button>
        </div>
    )
}