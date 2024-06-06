import "./FichePersonnage.css"
import { Statistique } from "../statistique/Statistique"

export const FichePersonnage = ({nom, prenom, image}) => {
    return(
        <div class="personnage">
            <img src={image} alt={ nom + " " + prenom } />
            {nom} {prenom}
            <hr />
            <Statistique></Statistique>
        </div>
    )
}