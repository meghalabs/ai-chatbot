import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { togetherai } from '@ai-sdk/togetherai';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: togetherai('mistralai/Mixtral-8x7B-Instruct-v0.1'),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error('❌ Chat API Error:', error?.message || error);
    return new Response(JSON.stringify({ error: error?.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
