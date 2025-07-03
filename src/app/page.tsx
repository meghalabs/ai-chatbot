'use client';

import { useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';

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
      <h1 className="text-2xl font-bold mb-4">🧠 AI Chatbot</h1>

      <div className="flex-1 space-y-2 overflow-y-auto border p-2 rounded bg-white">
        {messages.map((m, i) => (
          <div key={i} className={`text-${m.role === 'user' ? 'right' : 'left'}`}>
            <p className={`rounded ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'} p-2`}>
              <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
        />
        <button className="bg-blue-500 text-white px-4 rounded" type="submit">Send</button>
      </form>
    </div>
  );
}
