/**
 * In Next.js, a page is a React Component exported from a file in the pages directory.

    Pages are associated with a route based on their file name. For example, in development:

    pages/index.js is associated with the / route.
    pages/posts/first-post.js is associated with the /posts/first-post route.

 */

import Link from "next/link"

export default function FirstPost() {
    return <> 
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </>
}

/**
 * The Link component enables client-side navigation between two pages in the same Next.js app.

    Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

    Here’s a simple way you can verify it:

    Use the browser’s developer tools to change the background CSS property of <html> to yellow.
    Click on the links to go back and forth between the two pages.
    You’ll see that the yellow background persists between page transitions.
    This shows that the browser does not load the full page and client-side navigation is working.

    If you’ve used <a href="…"> instead of <Link href="…"> and did this, the background color will be cleared on link clicks because the browser does a full refresh.
 */


 /**
  * Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
  * 
  * You create routes as files under pages and use the built-in Link component. No routing libraries are required.
  * 
  *  If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
  * 
  * If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.
  * 
  */