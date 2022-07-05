import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../router/AppRouter";

const AppProviders = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    )
}
export default AppProviders;