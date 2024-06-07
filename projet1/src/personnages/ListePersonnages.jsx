import { FichePersonnage } from "./fichePersonnage/FichePersonnage"
import { AjouterPersonnage } from "./ajouterPersonnage/AjouterPersonnage"
import { useState } from "react"

export const ListePersonnage = ({liste}) => {
    const [getListe, setGetListe] = useState(liste)

    return (
        <div>
            <AjouterPersonnage liste={getListe} setGetListe={setGetListe}/>
            {getListe.map((value, index) => {
                return(
                    <div>
                        <FichePersonnage key={index} nom={value.nom} prenom={value.prenom} image={value.image} />
                    </div>
                )
            })}
        </div>
    )
}