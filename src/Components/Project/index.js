import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	function getTechs(techArray) {
		let techList = "";
		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}
		return techList;
	}

	// CREDIT: Section below worked on with coder colleague Brams Lo
	return (
		<Card style={{ width: "20rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/pictures/${image}`)}
				className="card-image"/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>

					{/* Deployed URL here */}
					<Card.Link href={appLink} target="_blank" className="card-link">Deployed URL for {name}</Card.Link>

					{/* GitHub repo URL here */}
					<Card.Link href={gitLink} target="_blank" className="card-link">GitHub Repo URL for {name}</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}
export default Project;
