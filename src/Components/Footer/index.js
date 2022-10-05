import React from "react";
function Footer() {
	return (
		<footer className="footer">
			<div>
				{/* My LinkedIn link */}
				<a
					href="https://www.linkedin.com/in/malickbax/"
					rel="noopener noreferrer"
					target="_blank">
					<img
						src={require("../../Assets/pictures/Linkedin-logo.png")}
						alt="LinkedIn Profile Link"
						className="logo"></img>
				</a>
			</div>
			<div>
				{/* My Github repo link */}	
				<a
					href="https://github.com/malickbax"
					rel="noopener noreferrer"
					target="_blank">
					<img
						src={require("../../Assets/pictures/github-logo.png")}
						alt="Github Profile Link"
						className="logo"></img>
				</a>
			</div>
		</footer>
	);
}
export default Footer;
