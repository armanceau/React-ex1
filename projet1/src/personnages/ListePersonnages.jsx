import { FichePersonnage } from "./fichePersonnage/FichePersonnage"

export const ListePersonnage = ({liste}) => {
    return (
        <div>
            {liste.map((value, index) => {
                return(
                    <div>
                        <FichePersonnage key={index} nom={value.nom} prenom={value.prenom} image={value.image} />
                    </div>
                )
            })}
        </div>
    )
}