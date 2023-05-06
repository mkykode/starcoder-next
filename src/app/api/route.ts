import { NextResponse } from 'next/server';
// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/bigcode/starcoder",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({"inputs": "Can you please let us know more details about your "}).then((response) => {
// 	console.log(JSON.stringify(response));
// });
export async function POST(request: Request) {
  // get the data from the request post body
  const req = await request.json();

  let response = {};
  const data = {
    inputs: req.question,
  };
  console.log('data', data);
  try {
    const res = await fetch(process.env.LANGUAGE_MODEL_URL as string, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    response = await res.json();
    console.log(response);
  } catch (error) {
    console.log(error);
    response = { error };
  }

  return NextResponse.json(response);
}
