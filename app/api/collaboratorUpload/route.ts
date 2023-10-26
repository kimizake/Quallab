import { CollaboratorForm } from "@/app/types/formDataType";
import authenticate from "@/app/util/Authenticate";
import { google } from "googleapis";

const POST = async (req: Request) => {
	try {
		const body: CollaboratorForm = await req.json();
		const auth = await authenticate();
		const sheets = google.sheets({ auth, version: "v4" });
		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.SHEET_URL,
			range: "Researchers!A:Z",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [
					[
						new Date().toISOString().split("T")[0],
						body.firstName,
						body.lastName,
						"UCL",
						body.jobTitle,
						body.interest,
						body.availability,
						body.accessRequirements,
						body.experienceLevel,
						body.email,
						body.projectTitle,
						body.projectDescription,
						body.timeRequirement,
						body.startDate,
						body.numberOfCollaborators,
					],
				],
			},
		});
		return Response.json({ status: 200 });
	} catch (e) {
		console.log(e);
		return Response.json({ status: 500 });
	}
};

export { POST };
