import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST() {
	const response = await generateText({
		model: google('gemini-2.5-flash'),
		prompt: 'what is sdk',
	});

	return Response.json({ response });
}
