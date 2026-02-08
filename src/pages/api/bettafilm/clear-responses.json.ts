import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

const responsesDir = path.join(process.cwd(), 'data', 'bettafilm-responses');
const responsesFile = path.join(responsesDir, 'responses.json');

// POST - Clear all responses
export const POST: APIRoute = async () => {
  try {
    // Write empty array to file
    fs.writeFileSync(responsesFile, JSON.stringify([], null, 2));
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to clear responses' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

