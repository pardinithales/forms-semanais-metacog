import React from 'react';
import { Lock } from 'lucide-react';
import { StarRating } from './StarRating';

interface FeedbackFormProps {
  progress: number;
  setProgress: (value: number) => void;
  hasImpediment: boolean;
  setHasImpediment: (value: boolean) => void;
  impedimentDesc: string;
  setImpedimentDesc: (value: string) => void;
  suggestion: string;
  setSuggestion: (value: string) => void;
  isAnonymous: boolean;
  setIsAnonymous: (value: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function FeedbackForm({
  progress,
  setProgress,
  hasImpediment,
  setHasImpediment,
  impedimentDesc,
  setImpedimentDesc,
  suggestion,
  setSuggestion,
  isAnonymous,
  setIsAnonymous,
  onSubmit,
}: FeedbackFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <StarRating progress={progress} setProgress={setProgress} />

      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={hasImpediment}
            onChange={(e) => setHasImpediment(e.target.checked)}
            className="h-4 w-4 text-indigo-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Did you face any impediments?</span>
        </label>
      </div>

      {hasImpediment && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Please describe the impediment
          </label>
          <textarea
            value={impedimentDesc}
            onChange={(e) => setImpedimentDesc(e.target.value)}
            required
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Any additional suggestions? (optional)
        </label>
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-4 w-4 text-indigo-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700 flex items-center">
            <Lock className="w-4 h-4 mr-1" />
            Submit anonymously
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  );
}