
# 🧠 AI Chatbot

An interactive AI-powered chatbot built with Next.js 15, React 19, and the `ai-sdk` using TogetherAI's Mixtral-8x7B-Instruct model. This project streams real-time AI responses using `@ai-sdk/react` and `@ai-sdk/togetherai`.

![Chatbot Screenshot](./Screenshot.png)

## 🚀 Features

- 🤖 Real-time AI chat with streaming
- 🎨 Clean, responsive UI using Tailwind CSS
- 🧠 Uses TogetherAI's Mixtral-8x7B-Instruct-v0.1 model
- ⚡ Built with Next.js 15 App Router and React 19
- 🔐 Secure API key with `.env` support

## 🛠️ Stack

- **Next.js 15.3.4**
- **React 19.0.0**
- **ai** `^3.1.16`
- **@ai-sdk/react** `^1.2.12`
- **@ai-sdk/togetherai** `^0.2.14`
- **Tailwind CSS 4**

## 📁 Project Structure

```
/app
  └── page.tsx            # Chat UI component using useChat
/api/chat
  └── route.ts            # API route using streamText from ai-sdk
next.config.ts            # TogetherAI env key + serverActions
.env.local                # TOGETHER_AI_API_KEY
```

## 📸 Preview

> ![Screenshot](./Screenshot%202025-07-03%20at%2011.52.41%20AM.png)

## 🌐 How to Run

```bash
git clone https://github.com/meghalabs/ai-chatbot.git
cd ai-chatbot
npm install
# Create a .env.local file with:
# TOGETHER_AI_API_KEY=your_key_here
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 🔐 .env.local

```env
TOGETHER_AI_API_KEY=your_togetherai_api_key
```

## 📦 Package Versions (Fixed)

```json
{
  "@ai-sdk/react": "^1.2.12",
  "@ai-sdk/togetherai": "^0.2.14",
  "ai": "^3.1.16",
  "next": "15.3.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## 🧑‍💻 Author

Made with ❤️ by [Megha](https://github.com/meghalabs)

---

> 💡 Feel free to fork, use, and improve!
