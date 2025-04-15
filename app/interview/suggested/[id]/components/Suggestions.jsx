import React, { useEffect } from 'react';
import Answer from './Answer';

export default function Suggestions({ selectedQuestion, aiquestions }) {
  if (!selectedQuestion) {
    return <p className='text-gray-600 text-center'>Select a question to see the answer.</p>;
  }

  // Find AI response matching the selected question's ID
  const aiResponse = aiquestions.find(ai => ai.questionsId[0] === selectedQuestion._id);
  console.log("AI Response for Selected Question:", aiResponse);

  useEffect(() => {
    // Ensure AI response exists before speaking
    if (aiResponse && aiResponse.aianswer) {
      const utterance = new SpeechSynthesisUtterance(aiResponse.suggestions);
      // Optional: Set properties like voice, pitch, rate
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Male') || speechSynthesis.getVoices()[0];
      utterance.pitch = 1; // Set pitch, 1 is normal
      utterance.rate = 1;  // Set rate, 1 is normal speed

      // Speak the AI answer when it is available
      speechSynthesis.speak(utterance);
    }
  }, [aiResponse]); // This effect runs when aiResponse changes

  return (
    <div className='col-span-2 bg-white p-8 flex flex-col mt-20 max-h-[100vh] shadow-xl mx-5'>
      <div className='p-2 flex w-full gap-3 justify-between '>
        <div className='flex flex-row gap-3 '>
          <p>text</p>
          <div>
            <p className='font-bold text-blue-600'>React Developer</p>
            <p className='text-gray-600 text-sm'>9 Years</p>
          </div>
        </div>
        <div>
          <p className='text-sm font-bold mx-4'>
            Rating: {aiResponse ? aiResponse.rating : 'N/A'}
          </p>
        </div>
      </div>
      <hr />
      <div className='mt-10'>
        <Answer ans={`Your Answer: ${selectedQuestion.answer}`} text={'Your Answer'} />
        <Answer ans={`AI Answer: ${aiResponse ? aiResponse.aianswer : 'No AI Answer Available'}`} text={'AI Answer'} />
        <Answer ans={`Suggestion: ${aiResponse ? aiResponse.suggestions : 'No suggestions available'}`} text={'Suggestions'} />
      </div>
    </div>
  );
}
