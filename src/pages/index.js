
import Nav from '../components/nav'
import '../firebase/firebase'
import Footer from '../components/footer'




export default function Home() {



  return (
    <>

    <Nav/>
    
    <Footer/>
    

    </>
  )
}

// import { getSortedPostsData } from '../lib/posts'



// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   console.log(allPostsData)
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
