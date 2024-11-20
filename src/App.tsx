import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from './firebase';
import { FeedbackForm } from './components/FeedbackForm';
import { SuccessMessage } from './components/SuccessMessage';

function App() {
  const [progress, setProgress] = useState<number>(5);
  const [hasImpediment, setHasImpediment] = useState<boolean>(false);
  const [impedimentDesc, setImpedimentDesc] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getWeekNumber = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
  };

  const resetForm = () => {
    setProgress(5);
    setHasImpediment(false);
    setImpedimentDesc('');
    setSuggestion('');
    setIsAnonymous(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedback = {
      timestamp: new Date().toISOString(),
      progress,
      hasImpediment,
      impedimentDesc: hasImpediment ? impedimentDesc : '',
      suggestion,
      isAnonymous,
      weekNumber: getWeekNumber()
    };

    try {
      await push(ref(db, 'submissions_feedbacks'), feedback);
      setSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Weekly Feedback</h2>
            <p className="mt-2 text-sm text-gray-600">Share your progress and help us improve</p>
          </div>

          {submitted ? (
            <SuccessMessage />
          ) : (
            <FeedbackForm
              progress={progress}
              setProgress={setProgress}
              hasImpediment={hasImpediment}
              setHasImpediment={setHasImpediment}
              impedimentDesc={impedimentDesc}
              setImpedimentDesc={setImpedimentDesc}
              suggestion={suggestion}
              setSuggestion={setSuggestion}
              isAnonymous={isAnonymous}
              setIsAnonymous={setIsAnonymous}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;