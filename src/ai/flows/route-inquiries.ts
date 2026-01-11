'use server';

/**
 * @fileOverview AI-powered tool that analyzes the 'Inquiry Type'
 * from the contact form submissions and routes the email
 * to the appropriate industry expert within EMPHZ.
 *
 * - routeInquiry - A function that handles the inquiry routing process.
 * - RouteInquiryInput - The input type for the routeInquiry function.
 * - RouteInquiryOutput - The return type for the routeInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteInquiryInputSchema = z.object({
  inquiryType: z
    .string()
    .describe('The type of inquiry, e.g., Oil & Gas, Power, Construction.'),
  inquiryDetails: z.string().describe('Detailed description of the inquiry.'),
});
export type RouteInquiryInput = z.infer<typeof RouteInquiryInputSchema>;

const RouteInquiryOutputSchema = z.object({
  expert: z.string().describe('The name or email of the appropriate industry expert.'),
  justification: z.string().describe('Why the inquiry was routed to this expert.'),
  summary: z.string().describe('A one-sentence summary of the customer inquiry.'),
});
export type RouteInquiryOutput = z.infer<typeof RouteInquiryOutputSchema>;

export async function routeInquiry(input: RouteInquiryInput): Promise<RouteInquiryOutput> {
  return routeInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeInquiryPrompt',
  input: {schema: RouteInquiryInputSchema},
  output: {schema: RouteInquiryOutputSchema},
  prompt: `You are an AI assistant responsible for routing customer inquiries to the appropriate industry expert within EMPHZ.

  Analyze the inquiry type and details provided to determine the best expert to handle the inquiry. 
  
  Also, provide a concise, one-sentence summary of the user's request.

  Inquiry Type: {{{inquiryType}}}
  Inquiry Details: {{{inquiryDetails}}}

  Output should be JSON. The expert field should contain the expert's name or email address, the justification should explain why this expert is the most suitable choice, and the summary should be a single sentence.
  `,
});

const routeInquiryFlow = ai.defineFlow(
  {
    name: 'routeInquiryFlow',
    inputSchema: RouteInquiryInputSchema,
    outputSchema: RouteInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
