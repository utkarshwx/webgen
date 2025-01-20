function ApiDocumentation() {
  return (
    <div className="min-h-screen px-6 py-4 bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 space-y-6">
        <h1 className="text-3xl font-semibold">Getting Started</h1>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <p className="mb-4">To start using our AI Image Generation API, you'll need an API key. You can get one by signing up for an account.</p>
          <code className="block bg-gray-100 dark:bg-neutral-700 p-2 rounded text-sm">
            curl -X POST https://api.aigen.com/v1/generate \
            -H "Authorization: Bearer YOUR_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{"{\"type\": \"header\", \"style\": \"minimal\"}"}'
          </code>
        </div>

        <h2 className="text-2xl font-semibold">Authentication</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <p>All API requests require authentication using a Bearer token in the Authorization header.</p>
          <code className="block bg-gray-100 dark:bg-neutral-700 p-2 rounded text-sm">
            Authorization: Bearer sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </code>
        </div>

        <h2 className="text-2xl font-semibold">API Endpoints</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <h3 className="text-xl font-medium">Generate Image (POST)</h3>
          <h3 className="text-xl font-medium">List Generations (GET)</h3>
          <code className="block bg-gray-100 dark:bg-neutral-700 p-2 rounded text-sm">GET /v1/generations</code>
          <h3 className="text-xl font-medium">Get Generation (GET)</h3>
          <code className="block bg-gray-100 dark:bg-neutral-700 p-2 rounded text-sm">GET /v1/generations/:id</code>
        </div>

        <h2 className="text-2xl font-semibold">Parameters</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Parameter</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">type</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">Type of image (header, card, profile)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">style</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">Style preset to apply</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">dimensions</td>
                <td className="border px-4 py-2">object</td>
                <td className="border px-4 py-2">Width and height of the output image</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold">Example Response</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <pre className="bg-gray-100 dark:bg-neutral-700 p-2 rounded text-sm">
            {`{
              "id": "gen_123456789",
              "status": "completed",
              "url": "https://api.aigen.com/images/gen_123456789.png",
              "created_at": "2025-01-01T12:00:00Z",
              "type": "header",
              "style": "minimal",
              "dimensions": {
                "width": 1200,
                "height": 630
              }
            }`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold">Rate Limits</h2>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
          <ul className="list-disc pl-6">
            <li>Free tier: 100 requests per hour</li>
            <li>Pro tier: 1,000 requests per hour</li>
            <li>Enterprise tier: Custom limits</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ApiDocumentation;
