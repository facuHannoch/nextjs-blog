/**

    In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

    The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

    If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

    You can place the global CSS file anywhere and use any name.

 */

import '../styles/global.css'

export default function App({Component, pageProps}) {
    return <Component {...pageProps} />
}
// This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.

// You need to restart the development server when you add pages/_app.js.