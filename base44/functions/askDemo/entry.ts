import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

export default async function(req) {
  try {
    const body = await req.json();
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
    if (!prompt || prompt.length > 400) {
      return Response.json({ error: "Prompt must be between 1 and 400 characters." }, { status: 400 });
    }
    const language = body.language;
    if (language !== undefined && language !== "hi") {
      return Response.json({ error: "Unsupported reply language." }, { status: 400 });
    }
    const base44 = createClientFromRequest(req);
    const res = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt:
        "You are Jago, the assistant on the Jago AI enterprise suite landing page, answering a live product demo. " +
        "Answer the user's message in 2 to 4 short sentences. " +
        (language === "hi"
          ? "Write your answer in Hindi using Devanagari script, even if the message is in English. "
          : "Write in the SAME LANGUAGE the user used (for example Hindi, Tamil or English). ") +
        "Be plain, factual and helpful. If you do not know something, say so briefly.\n\n" +
        "User message: " + prompt,
      response_json_schema: {
        type: "object",
        properties: {
          answer: { type: "string" },
        },
        required: ["answer"],
      },
    });
    return Response.json({ answer: res.answer });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}