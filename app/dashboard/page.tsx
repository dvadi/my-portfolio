import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // PASTE YOUR EMBED URL BELOW
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/9cf75f12-0d44-41f7-bd4d-dccdc1154ded/page/45nhF"; 

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* The Dashboard Iframe */}
      <div className="flex-1 w-full h-[calc(100vh-64px)]">
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </main>
  );
}