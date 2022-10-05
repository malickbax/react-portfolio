import React from "react";

function Resume() {
	return (
		<section>
			<div>
				<h1>Resume</h1>
			</div>
			<div>
				For any questions about my qualifications, please contact me. My full resume can be dowloaded by clicking the link below 
			{/* URL/source to download resume */}
				<a href={require("../../Assets/resume-malick ba/Resume - Malick Ba.pdf")} download>
				<h4>Download Resume</h4>
				</a>
			</div>
		</section>
	);
}

export default Resume;
