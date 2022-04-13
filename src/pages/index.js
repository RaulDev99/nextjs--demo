import Head from 'next/head'
import Layout, { siteTitle } from '../components/Borrarlayout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Nav from '../components/nav'
import '../firebase/firebase'
import Footer from '../components/footer'



// import { useStorage } from '../context/StorageContext'

export default function Home({ allPostsData }) {

  

  // const {storage} = useStorage()

  return (
    <>

    <Nav/>
    




    <Footer/>
    {/* {
      storage.lenght === 0 ?(
      <h1>No se han sacado productos de almacén aun</h1>
      ): (
        <div>
        {storage.map(elemento => (
            <div key="elemento.id">
              <h1>
                {elemento.referencia}
              </h1>
              <h2>{elemento.descripccion}</h2>
              <p>{elemento.proyecto}</p>
            </div>
        ))}
        </div>
      )
    } */}
    
    
    {/* <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout> */}

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
