import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


/**
 * 
 * Fetching Data at Request Time
 * 
 * If you need to fetch data at request time instead of at build time, you can try Server-side Rendering.
 * 
 * To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
 * 
*/

// Here’s the starter code for getServerSideProps
/*
export async function getServerSideProps(context) {
  return {
    props: {

    }
  }
}
*/

/**
 * Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.
 * 
 * You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
 * 
*/


/**
 * Client-side Rendering
 * 
 * If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
 * Statically generate (pre-render) parts of the page that do not require external data.
 * When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.
 * 
 * This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.
 * 
 * 
 * SWR
 * 
 * The team behind Next.js has created a React hook for data fetching called SWR. It is recommended if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. 
 * Here’s an example usage:
 */
/*
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
*/

// getStaticProps can only be exported from a page. You can’t export it from non-page files. One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop. Now you can access the blog posts like so:

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        A simple Blog {' '}
        {/* {' '} adds an empty space, which is used to divide text over multiple lines. */}
        <p>
          This is a simple blog made with Next.js
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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

      {/* This page is using a library called styled-jsx. It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected). */}
      {/* Next.js has built-in support for styled-jsx, but it is also possible to use other popular CSS-in-JS libraries such as styled-components or emotion. */}
      <style jsx >
        {`
        a {
          font-size: 1.2rem;
        }
      `}

      </style>
    </Layout>

  )
}
