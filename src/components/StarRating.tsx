import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  progress: number;
  setProgress: (value: number) => void;
}

export function StarRating({ progress, setProgress }: StarRatingProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        How would you rate your progress this week?
      </label>
      <div className="flex justify-center space-x-2">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setProgress(i + 1)}
            className={`transition-all ${
              i < progress ? 'text-yellow-400' : 'text-gray-300'
            } hover:scale-110`}
          >
            <Star className="w-8 h-8 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );
}