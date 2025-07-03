import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { togetherai } from '@ai-sdk/togetherai';

export const runtime = 'edge';
// for API route


export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: togetherai('mistralai/Mixtral-8x7B-Instruct-v0.1'),
      messages,
    });

    // ✅ Proper streaming response
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
