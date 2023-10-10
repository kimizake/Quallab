import { google } from "googleapis";

const authenticate = async () => {
	try {
		const auth = await google.auth.getClient({
			projectId: process.env.GOOGLE_PROJECT_ID,
			credentials: {
				type: "service_account",
				private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
				client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				client_id: process.env.GOOGLE_ID,
				token_url: "https://oauth2.googleapis.com/token",
				universe_domain: "googleapis.com",
			},
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});
		return auth;
	} catch (e) {
		throw e;
	}
};

export default authenticate;
