export function handler (event, context) {
  console.log(event);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: 'Hello world',
  }
}