export type CollaboratorForm = {
	accessRequirements: string;
	availability: "Online" | "In Person";
	descriptionOfWork: string;
	email: string;
	experienceLevel: string;
	firstName: string;
	interest: string;
	jobTitle: string;
	lastName: string;
	numberOfCollaborators: number;
	projectDescription: string;
	projectTitle: string;
	researchStyle: string;
	startDate: string;
	timeRequirement: number;
};

export type ProjectForm = {
	// accessRequirements: string;
	// availability: "Online" | "In Person";
	email: string;
	// experienceLevel: string;
	firstName: string;
	interest: string;
	jobTitle: string;
	lastName: string;
};
