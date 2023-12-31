//import * as React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutePaths from './Constants/route-paths';
import FadeIn from './utils/FadeIn';
import HomePage from './Pages/HomePage';
// import { useDispatch, useSelector } from "react-redux";
import EarringsPage from './Pages/EarringsPage';
import ProductsPresentation from './Components/ProductsPresentation';



function App() {
  // const dispatch = useDispatch();
	// const modalState = useSelector(selectModal);

	// useEffect(() => {
	// 	dispatch(initializeAuth());
	// }, []);

    return (
      <>
        {/* <HomePage /> */}
        <BrowserRouter>
				<Routes>
					<Route
						path={RoutePaths.HOME}
						element={
							<FadeIn>
								<HomePage />
							</FadeIn>
						}
					/>
					<Route
						path={RoutePaths.EARRINGS}
						element={
							<FadeIn>
								<EarringsPage />
							</FadeIn>
						}
					/>
					<Route
						path={RoutePaths.PRESENTATION}
						element={
							<FadeIn>
								<ProductsPresentation />
							</FadeIn>
						}
					/>
				</Routes>
			</BrowserRouter>
		
      </>
    );
  }


export default App;


