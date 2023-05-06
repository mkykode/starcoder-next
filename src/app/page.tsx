'use client';
export default function Home() {
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
          console.log(await res.json());
        }}
        className="w-full"
      >
        <label className="block mb-4 font-bold text-gray-700 text-sm uppercase">
          Write your code
        </label>
        <textarea name="question" className="w-full h-96 border border-b-0" />
        <button className="mt-8 px-4 py-2 bg-black text-white " type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
