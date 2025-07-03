import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log('Incoming messages:', JSON.stringify(messages, null, 2));

  const cleanMessages = messages.map((msg: any) => ({
    role: msg.role,
    content: msg.content,
  }));

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // use this to be safe
      messages: cleanMessages,
    }),
  });

  const data = await response.json();

  console.log('Raw OpenAI response:', JSON.stringify(data, null, 2));

  const message = data.choices?.[0]?.message;

  if (!message) {
    return NextResponse.json({
      message: { role: 'assistant', content: 'No response from OpenAI.' },
    });
  }

  return NextResponse.json({ message });
}
