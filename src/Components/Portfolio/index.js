import React from 'react';
import Project from '../Project';
function Portfolio() {
// Creating and array of projects below
	const projects = [
// Group Project 1 - Bragging Rights
		{
			name: "Bragging Rights",
			description: "Worked closely with other Front and Back End Developers to build this blog-style web platform that allows users to post game achievements and view their fellow users achievements.",
			deployed: "https://aqueous-stream-06315.herokuapp.com/",
			image: "../../Assets/pictures/screenshot-bragging-rights.png",	
			github: "https://github.com/malickbax/bragging-rights",
		},

// Group Project 2 - Fooder
{
	name: "Fooder",
	description: "A web application that allows users to conveniently find restaurants based on their food dietary preferences and location.",
	deployed: "https://malickbax.github.io/fooder/",
	image: "../../Assets/pictures/screenshot-fooder.png",	
	github: "https://github.com/malickbax/fooder",
},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">Coding Bootcamp Projects</h1>
			</div>
			<div>
{/* // CREDIT: Section worked on with developer colleague, Brams Lo */}
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}
export default Portfolio;
