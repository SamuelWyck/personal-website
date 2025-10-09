import App from "./App.jsx";


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                index: true,
                element: <p>hello</p>
            }
        ]    
    }
];



export default routes;