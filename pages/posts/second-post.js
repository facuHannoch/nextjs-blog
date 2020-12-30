// Next.js can serve static files, like images, under the top-level public directory. Files inside public can be referenced from the root of the application similar to pages.
// The public directory is also useful for robots.txt, Google Site Verification, and any other static assets.

import Head from 'next/head'
import Link from "next/link"
import Layout from '../../components/layout'

export default function SecondPost() {
    // <Head> is used instead of the lowercase <head>. <Head> is a React Component that is built into Next.js. It allows you to modify the <head> of a page.
    return (
        <Layout>
            <Head>
                <title>Second Post</title>
            </Head>
            <h1>Second Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

// If you want to customize the <html> tag, for example to add the lang attribute, you can do so by creating a pages/_document.js file. 