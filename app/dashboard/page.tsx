import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Ensure this URL has '/embed/' in it
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/9cf75f12-0d44-41f7-bd4d-dccdc1154ded/page/45nhF"; 
  const directLink = "https://lookerstudio.google.com/reporting/9cf75f12-0d44-41f7-bd4d-dccdc1154ded/page/45nhF";

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
          <a href={directLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center md:hidden">
            Open in new tab <ExternalLink size={14} className="ml-1"/>
          </a>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 w-full relative bg-white">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
        
        {/* Loading/Error Fallback Layer (sits behind iframe) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-gray-500">
          <p className="mb-4">Loading Dashboard...</p>
          <a 
            href={directLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Click here if it doesn't load
          </a>
        </div>
      </div>
    </main>
  );
}