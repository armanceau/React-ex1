import { useState } from "react"

export const AjouterPersonnage = ({liste, setGetListe}) => {
    const [temp, setTemp] = useState({nom:"", prenom:"", image:""})

    const onSubmit = (e) => {
        e.preventDefault();
        setGetListe([...liste, temp]);
        console.log(liste)
    }

    const onChange = (e) => {
       temp[e.target.name] = e.target.value;
       setTemp(temp);
    }

    return (
        <div>
            <form action="addPerso" onSubmit={onSubmit}>
                <label htmlFor="nom">nom</label>
                <input type="text" name="nom" onChange={onChange} />

                <label htmlFor="prenom">prenom</label>
                <input type="text" name="prenom" onChange={onChange} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}