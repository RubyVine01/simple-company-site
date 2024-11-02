import { NextResponse } from "next/server";

function jsonErrorResponse(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Валидация полей
    if (!name || !email || !message) {
      return jsonErrorResponse("All fields are required.", 400);
    }
    if (name.length > 50) {
      return jsonErrorResponse("Name must not exceed 50 characters.", 400);
    }
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      return jsonErrorResponse("Invalid email format.", 400);
    }
    if (message.length > 200) {
      return jsonErrorResponse("Message must not exceed 200 characters.", 400);
    }

    console.log("Received form data:", { name, email, message });
    return NextResponse.json({
      message: `Thank you for your interest, ${name}!`,
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return jsonErrorResponse(
      "An unexpected error occurred. Please try again later.",
      500
    );
  }
}
