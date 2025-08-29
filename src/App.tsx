import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Layout />
			<Analytics />
		</BrowserRouter>
	);
}

export default App;
