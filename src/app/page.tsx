'use client';

import { useEffect, useRef } from 'react';
// for client component (e.g. ChatPage)
import { useChat } from '@ai-sdk/react';

// for API route
import { streamText } from 'ai';
import { togetherai } from '@ai-sdk/togetherai';



export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-md h-[90vh] flex flex-col">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      <div className="flex-1 space-y-2 overflow-y-auto border p-2 rounded bg-white">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <p className={`p-2 rounded ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          className="flex-1 border p-2 rounded-l"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
}
