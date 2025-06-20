// app/api/pdf/route.js
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import pdf from "pdf-parse";

export async function POST(request) {
  try {
    if (!request.body) {
      return NextResponse.json({ error: "No request body" }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("pdf");

    if (!file) {
      return NextResponse.json(
        { error: "No PDF file uploaded" },
        { status: 400 }
      );
    }

    // Log file details for debugging
    console.log("Received file:", {
      type: file.type,
      size: file.size,
      name: file.name,
    });

    // Validate file type
    if (!file.type || !file.type.includes("pdf")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF." },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("File converted to buffer, size:", buffer.length);

    // Process PDF directly from buffer
    try {
      const data = await pdf(buffer);

      return NextResponse.json({
        success: true,
        text: data.text,
        info: {
          pages: data.numpages,
          metadata: data.info,
        },
      });
    } catch (error) {
      console.error("Error processing PDF:", error);
      return NextResponse.json(
        { error: "Error processing PDF: " + error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}

// Configure segment size for larger files
export const config = {
  api: {
    bodyParser: false,
    responseLimit: "50mb",
  },
};
