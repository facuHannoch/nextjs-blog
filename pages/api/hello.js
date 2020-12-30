export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}
// Now accessing at http://localhost:3000/api/hello you should see {"text":"Hello"}.

/*
 * req is an instance of http.IncomingMessage, plus some pre-built middlewares you can see here: https://nextjs.org/docs/api-routes/api-middlewares.
 * res is an instance of http.ServerResponse, plus some helper functions you can see here: https://nextjs.org/docs/api-routes/response-helpers.
*/