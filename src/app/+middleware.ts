export const unsatble_settings = {
  matcher: {
    method: ["GET", "POST"],
    patterns: ["/api/hello", "/api/world"],
  },
};

export default function middleware(request: Request) {
  console.log(`Middleware executed for: ${request.url}`);
  // Your middleware logic goes here
}
