import "./App.css";
import React, { useState } from "react";

// Importing components here
import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
	const [currentTab, setCurrentTab] = useState("about");

// CREDIT: Worked on this section with coder colleague Brams Lo
	// Tab selection rendering function
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "resume":
				return <Resume />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
