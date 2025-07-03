'use client';

import { useEffect, useRef,useState } from 'react';
import { useChat } from '@ai-sdk/react';

export default function ChatPage() {

const [isStreaming, setIsStreaming] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: '/api/chat' ,  onFinish: () => setIsStreaming(false),});


  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsStreaming(true); // starts before sending
  handleSubmit(e);
};

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-md h-[90vh] flex flex-col">
      <h1 className="text-2xl font-bold mb-4">🧠 AI Chatbot</h1>
<button
  onClick={() => window.location.reload()}
  className="text-sm text-gray-600 hover:underline self-end mb-2"
>
  🔄 Reset Chat
</button>

      <div className="flex-1 space-y-2 overflow-y-auto border p-2 rounded bg-white">
        {messages.map((m, i) => (
          <div key={i} className={`text-${m.role === 'user' ? 'right' : 'left'}`}>
            {isStreaming && (
  <p className="text-sm italic text-gray-500">AI is thinking...</p>
)}
           <p className={`rounded ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'} p-2`}>
              <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex gap-2">
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
