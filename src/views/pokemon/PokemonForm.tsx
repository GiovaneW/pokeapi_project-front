import { useForm } from "react-hook-form"
import { pokemonSchema } from "../../services/schemas/pokemonSchemas"

export default function PokemonForm(): React.ReactElement {

    const {} = useForm({})

    return (
        <>
            Aqui e pra ter um form
        </>
    )
}