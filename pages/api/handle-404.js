/*
 * It would be better to include this as a file, but
 * including files in nextjs is broken.
 * https://vercel.com/support/articles/how-can-i-use-files-in-serverless-functions#next.js
 * - JO
 */
const notFoundDocument = `
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                margin: 0;
            }
            
            .container {
                color:#000;
                background:#fff;
                font-family:-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
                height:100vh;
                text-align:center;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center
            }
            
            .code {
                display:inline-block;
                border-right:1px solid rgba(0, 0, 0,.3);
                margin:0;
                margin-right:20px;
                padding:10px 23px 10px 0;
                font-size:24px;
                font-weight:500;
                vertical-align:top;
            }
            
            .message {
                display:inline-block;
                text-align:left;
                line-height:49px;
                height:49px;
                vertical-align:middle;
            }
            
            .message > h2 {
                font-size:14px;
                font-weight:normal;
                line-height:inherit;
                margin:0;
                padding:0;
                color: #363;
            }
            </style>
    </head>
    <body>
    <div class="container">

        <div>
            <h1 class="code">
                404
            </h1>
            <div class="message">
                <h2>
                    This page could not be found.
                </h2>
            </div>
        </div>
    </div></body></html>
`;

// a mock service that redirects /foo/bar to /
const mockServiceResponse = async (req, res) => {
    const { url } = req;

    if (url === '/foo/bar') {
        return { status: 302, destination: '/' };
    }

    return undefined;
};

/**
 * This endpoint will return a redirect if it exists, or a 404.
 * api/product/detail/handle
 * api/product/all
 * @param {Object} req request object from node
 * @param {Object} res response object from node
 */
export default async (req, res) => {
    // TODO - this should come asycronously from the context-service
    const serviceResponse = await mockServiceResponse(req, res);

    if (serviceResponse) {
        const { status, destination } = serviceResponse;

        return res.redirect(status, destination);
    }

    res.setHeader('Content-Type', 'text/html');

    return res.status(404).send(notFoundDocument);
};
