'use server';

/**
 * @fileOverview This file contains the AI-powered SEO optimization flow.
 *
 * It provides a function to generate SEO-optimized titles and descriptions for a given page content.
 * The flow uses Genkit to interact with a language model.
 *
 * @exports aiPoweredSeoOptimization - The main function to generate SEO-optimized content.
 * @exports AiPoweredSeoOptimizationInput - The input type for the function.
 * @exports AiPoweredSeoOptimizationOutput - The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredSeoOptimizationInputSchema = z.object({
  pageContent: z.string().describe('The content of the page to optimize for SEO.'),
  pageTitle: z.string().optional().describe('The current title of the page.'),
  pageDescription: z.string().optional().describe('The current description of the page.'),
});

export type AiPoweredSeoOptimizationInput = z.infer<typeof AiPoweredSeoOptimizationInputSchema>;

const AiPoweredSeoOptimizationOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized title for the page.'),
  description: z.string().describe('The SEO-optimized description for the page.'),
});

export type AiPoweredSeoOptimizationOutput = z.infer<typeof AiPoweredSeoOptimizationOutputSchema>;

export async function aiPoweredSeoOptimization(input: AiPoweredSeoOptimizationInput): Promise<AiPoweredSeoOptimizationOutput> {
  return aiPoweredSeoOptimizationFlow(input);
}

const seoOptimizationPrompt = ai.definePrompt({
  name: 'seoOptimizationPrompt',
  input: {schema: AiPoweredSeoOptimizationInputSchema},
  output: {schema: AiPoweredSeoOptimizationOutputSchema},
  prompt: `You are an expert SEO optimizer.

  Given the content of a page, generate an SEO-optimized title and description.
  The title should be concise and engaging, while the description should accurately
  summarize the page content and entice users to click on the search result.

  Page Content: {{{pageContent}}}
  Current Title: {{{pageTitle}}}
  Current Description: {{{pageDescription}}}

  Ensure the title and description are within the recommended length limits for search engines.
  The title should be less than 60 characters and the description should be less than 160 characters.
  Focus on keywords relevant to the page content to improve search engine ranking.
  Return the title and description in the following JSON format:
  {
    "title": "SEO Optimized Title",
    "description": "SEO Optimized Description"
  }
  `,
});

const aiPoweredSeoOptimizationFlow = ai.defineFlow(
  {
    name: 'aiPoweredSeoOptimizationFlow',
    inputSchema: AiPoweredSeoOptimizationInputSchema,
    outputSchema: AiPoweredSeoOptimizationOutputSchema,
  },
  async input => {
    const {output} = await seoOptimizationPrompt(input);
    return output!;
  }
);
