import Head from 'next/head'
import Navbar from '../../components/Navbar'
import {MoviesList} from '../../../Data_movie'
import Card from '../../components/Card'
// import { useRouter} from "next/router";
import Link from "next/link";
import Card2 from "../../components/Card2";

export default function Page() {

    return (
      <>
          <Navbar/>
          <div className="flex flex-wrap justify-center">
              {MoviesList.map((movies)=>(
                  <Link href={movies.imdb}>
                      <Card/>

                  </Link>
              ))}
          </div>

      </>
  )
}
// export async function getStaticProps() {
//     // Instead of fetching your `/api` route you can call the same
//     // function directly in `getStaticProps`
//     const posts = MoviesList
//
//     // Props returned will be passed to the page component
//     return { props: { posts } }
// }