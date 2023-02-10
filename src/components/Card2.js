import { useState} from 'react';

function Card (props){
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET'
    };


    async function fMovie() {
        await fetch('https://www.omdbapi.com/?i=' + props.imdb+"&apikey=221cf49a",options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovie(response);

            })
            .catch(err => console.error(err));
    }
    if(fe === 0){ fMovie()
        setFe(1);
    }
    // console.log(note);
    return  (
        <>
            {/*<ApiFetch imdb={props.imdb}/>*/}
            <div className="w-[170px] sm:w-[250px] sm:m-3 m-2 bg-[#363636] h-[450] overflow-hidden h-auto rounded shadow">
                <div className="center items-center">
                    <img className="overflow-hidden w-100 h-[450]" src={movie.Poster}/>
                    <div className="flex items-center justify-between p-3 rounded">
                        <h3 className="font-medium font-sans  text-amber-50">{movie.Title}</h3>
                        <h3 className="text-amber-300 m-0 ">{movie.imdbRating}</h3>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Card;

export async function getStaticProps(ctx) {
    const options = {
        method: 'GET'
    };
    const response = await fetch(`https://www.omdbapi.com/?i=${ctx}&apikey=221cf49a`,options)

    // so much power!
    // if (!response.ok) {
    //     res.writeHead(302, { Location: '/notes' })
    //     res.end()
    //     return {props: {}}
    // }

    const {data} = await response.json()
    console.log(ctx);

    if (data) {
        return {
            props: {note: data}
        }
    }
}