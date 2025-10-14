import App from "./App.jsx";
import PortfolioPage from "./components/portfolioPage.jsx";
import { Navigate } from "react-router-dom";


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                index: true,
                element: <PortfolioPage />
            },
            {
                path: "*",
                element: <Navigate to="/" replace={true} />
            }
        ]    
    }
];



export default routes;