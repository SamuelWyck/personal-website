import App from "./App.jsx";
import PortfolioPage from "./components/portfolioPage.jsx";


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                index: true,
                element: <PortfolioPage />
            }
        ]    
    }
];



export default routes;