import { NextResponse } from "next/server";

const validateFormData = (name: string, email: string, message: string) => {
  const errors = [];

  if (!name || !email || !message) errors.push("All fields are required.");
  if (name.length > 50) errors.push("Name must not exceed 50 characters.");
  if (message.length > 200)
    errors.push("Message must not exceed 200 characters.");

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegex.test(email)) errors.push("Invalid email format.");

  return errors.length ? errors : null;
};

export async function POST(req: Request) {
  // Attempt to parse JSON from the request
  try {
    let formData;
    try {
      formData = await req.json();
    } catch {
      // Return an error if JSON parsing fails
      return NextResponse.json(
        { error: "Invalid JSON format." },
        { status: 400 }
      );
    }

    const { name, email, message } = formData;

    // Validate form data
    const validationErrors = validateFormData(name, email, message);
    if (validationErrors) {
      return NextResponse.json(
        { error: validationErrors.join(" ") },
        { status: 400 }
      );
    }

    console.log("Received form data:", { name, email, message });

    // Respond with a success message on valid submission
    return NextResponse.json({
      message: `Thank you for your interest, ${name}!`,
    });
  } catch (error) {
    // Log unexpected errors and return a generic error message
    console.error("Error handling request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
