// Imports - REACT & Components
import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume.js";

// Rendering App Page
function App() {
  const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
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
