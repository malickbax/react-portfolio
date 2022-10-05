import React from "react";
// Importing data from Navigation component
import Navigation from "../Navigation";
// Using props below to pass data from one component to another
function Header(props) {
	const { currentTab, setCurrentTab } = props;
	return (
		<header>
			<div>
				<h2> <strong>Malick Ba</strong>—React Portfolio</h2>
			</div>
			<div>
			<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}
export default Header;
