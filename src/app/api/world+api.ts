export async function GET(request: Request) {
  //   const data = await request.json();
  //   console.log(data);
  return Response.json({ message: "World GET" });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  return Response.json({ message: "World POST", data });
}
