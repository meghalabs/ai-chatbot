'use client';

import { useChat } from 'ai/react';
export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <p className={`p-2 rounded ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
            </p>
          </div>
        ))}
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
