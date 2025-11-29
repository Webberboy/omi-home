'use client';

import { useEffect, useState } from 'react';

interface EmailEntry {
  email: string;
  timestamp: string;
  userAgent: string;
  source: string;
}

export default function AdminEmailsPage() {
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      // Get the base URL - use relative path for same origin, or construct full URL
      const baseUrl = typeof window !== 'undefined' ? `${window.location.origin}` : '';
      const apiUrl = `${baseUrl}/api/subscribe`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (response.ok) {
        setEmails(data.emails);
      } else {
        setError(data.error || 'Failed to fetch emails');
      }
    } catch (error) {
      console.error('Failed to fetch emails:', error);
      setError('Failed to fetch emails');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const csvContent = [
      ['Email', 'Timestamp', 'Source', 'User Agent'],
      ...emails.map(email => [
        email.email,
        email.timestamp,
        email.source,
        email.userAgent
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email_subscriptions.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Email Subscriptions</h1>
          <button
            onClick={downloadCSV}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Download CSV
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <p className="text-gray-600">
              Total Subscribers: <span className="font-semibold">{emails.length}</span>
            </p>
          </div>

          {emails.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No email subscriptions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Agent
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emails.map((email, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {email.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(email.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {email.source}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={email.userAgent}>
                        {email.userAgent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">CSV File Location</h3>
          <p className="text-blue-700 text-sm">
            Emails are stored in: <code className="bg-blue-100 px-2 py-1 rounded">email_subscriptions.csv</code>
          </p>
          <p className="text-blue-700 text-sm mt-1">
            This file is automatically created when the first email is submitted.
          </p>
        </div>
      </div>
    </div>
  );
}