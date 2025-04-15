export const GEMINI_PROMPT = (title, experience, level) => `Job Title: ${title}, Experience: ${experience}, Level:${level}. You are an interviewer. Based on this data, generate 5 interview questions.

Provide the output in **ONLY** JSON format, with the following structure:
\json
{
  "questions": [
    { "question": "Your question text here", "answer": "" },
    { "question": "Another question text here", "answer": "" }
  ]
}
\
Do not add any additional text before or after the JSON.`;

export const answerPrompt = (formattedQuestions) => `
Given the following interview questions and answers, evaluate them by rating, improving responses, and analyzing the emotional tone of each answer.

Questions/Answers:
${JSON.stringify(formattedQuestions, null, 2)}

Provide the output in **ONLY** JSON format:
\`\`\`json
{
  "AI Response": [
    {
      "question": "Question text here",
      "rating": "Integer between 1 and 5",
      "suggestedAnswer": "Improved answer",
      "suggestion": "Suggestions for improvement",
      "emotions": {
        "nervousness": "Integer between 1 (low) and 5 (high)",
        "confidence": "Integer between 1 (low) and 5 (high)",
        "clarity": "Integer between 1 (low) and 5 (high)",
        "enthusiasm": "Integer between 1 (low) and 5 (high)"
      },
      "emotionAdvice": "Advice based on emotional tone"
    }
  ]
}
\`\`\`
`;


