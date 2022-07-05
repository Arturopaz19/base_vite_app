import { Home } from "pages";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}
export default AppRouter;