import GenreMode from "../../components/GenreModeComponents/GenreMode";


const GenreModePage = ({params}: {params: {genre: string}}) => {
console.log(params)

    return (
        <>
        <GenreMode genre={params.genre}/>
        </>
    )
};

export default GenreModePage;