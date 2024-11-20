import React from 'react';
import { Send } from 'lucide-react';

export function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        <Send className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Thank you!</h3>
      <p className="mt-2 text-gray-600">Your feedback has been submitted successfully.</p>
    </div>
  );
}