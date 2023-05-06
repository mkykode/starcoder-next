'use client';

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
  const [code, setCode] = useState('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
      <h1 className="text-3xl font-bold pb-8">Star Coder</h1>
      <form
        action="/"
        method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const question = formData.get('question') as string;
          const res = await fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
          });
          const code = (await res.json()).at(0)?.generated_text;
          setCode(code);
        }}
        className="w-full"
      >
        <label className="block mb-4 font-bold text-gray-700 text-sm uppercase">
          Write your code
        </label>
        <textarea
          name="question"
          className="overflow-auto resize-y py-2 px-3 w-full min-h-[144px] max-h-[500px] whitespace-pre-wrap inline-block border border-gray-200 rounded-lg shadow-inner outline-none focus:ring focus:ring-blue-200 focus:shadow-inner dark:bg-gray-925"
        />
        <button className="mt-8 px-4 py-2 bg-black text-white " type="submit">
          Submit
        </button>
      </form>
      <h2 className="text-3xl font-bold pb-2 pt-8">Prediction</h2>
      <section className="mt-8 bg-white w-full flex justify-start">
        <code className="overflow-auto resize-y py-2 px-3 w-full min-h-[144px] max-h-[500px] whitespace-pre-wrap inline-block border border-gray-200 rounded-lg shadow-inner outline-none focus:ring focus:ring-blue-200 focus:shadow-inner dark:bg-gray-925 svelte-1wfa7x9">
          <SyntaxHighlighter language="typescript" style={docco}>
            {code}
          </SyntaxHighlighter>
        </code>
      </section>
    </main>
  );
}
