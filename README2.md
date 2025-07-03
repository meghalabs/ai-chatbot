# 🧠 AI Chatbot with TogetherAI + Vercel AI SDK

A simple, elegant chatbot UI built using:

- **Next.js 15**
- **React 19**
- **Tailwind CSS**
- **@ai-sdk/react** (Vercel AI SDK)
- **TogetherAI (Mixtral-8x7B-Instruct)** for LLM responses
- **Edge runtime** for fast, streaming responses

> ✅ This project avoids deprecated packages and uses the latest, stable Vercel AI SDK setup.

---

## 💻 Features

- Chat with an AI assistant powered by TogetherAI
- Realtime streaming response via `streamText()`
- Auto-scroll to latest message
- Clean UI with Tailwind CSS
- Fully working API route using `app/api/chat/route.ts`
- Edge runtime for low latency

---

## 📁 Project Structure

```bash
src/
  app/
    api/chat/route.ts   # API route using TogetherAI + streamText
    page.tsx            # Frontend UI using useChat() from @ai-sdk/react
tailwind.config.js
next.config.ts
package.json
README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/meghalabs/ai-chatbot.git
cd ai-chatbot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up TogetherAI API key

Create a `.env.local` file:

```bash
TOGETHER_AI_API_KEY=your_together_ai_api_key
```

### 4. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` to start chatting!

---

## 📦 Dependencies

```json
"@ai-sdk/react": "^1.2.12",
"@ai-sdk/togetherai": "^0.2.14",
"ai": "^3.1.16",
"next": "15.3.4",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"tailwindcss": "^4"
```

---

## 📸 Screenshot


```md


```

---

## 📚 Credits

- [Vercel AI SDK](https://ai-sdk.dev/)
- [TogetherAI](https://www.together.ai/)
- [Mixtral-8x7B](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1)

---

## 🛡️ License

MIT

---

Made with ❤️ by Megha
