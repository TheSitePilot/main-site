import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

const responsesDir = path.join(process.cwd(), 'data', 'bettafilm-responses');
const responsesFile = path.join(responsesDir, 'responses.json');

// Ensure directory exists
if (!fs.existsSync(responsesDir)) {
  fs.mkdirSync(responsesDir, { recursive: true });
}

// Ensure file exists
if (!fs.existsSync(responsesFile)) {
  fs.writeFileSync(responsesFile, JSON.stringify([], null, 2));
}

// GET - Retrieve all responses
export const GET: APIRoute = async () => {
  try {
    const data = fs.readFileSync(responsesFile, 'utf-8');
    const responses = JSON.parse(data);
    
    return new Response(JSON.stringify(responses), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read responses' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

// POST - Add new response
export const POST: APIRoute = async ({ request }) => {
  try {
    const newResponse = await request.json();
    
    // Read existing responses
    const data = fs.readFileSync(responsesFile, 'utf-8');
    const responses = JSON.parse(data);
    
    // Add new response with ID and timestamp
    const responseWithMeta = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...newResponse
    };
    
    responses.push(responseWithMeta);
    
    // Write back to file
    fs.writeFileSync(responsesFile, JSON.stringify(responses, null, 2));
    
    return new Response(JSON.stringify({ success: true, response: responseWithMeta }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save response' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

// DELETE - Remove a response by ID
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();
    
    // Read existing responses
    const data = fs.readFileSync(responsesFile, 'utf-8');
    let responses = JSON.parse(data);
    
    // Filter out the response with matching ID
    responses = responses.filter((r: any) => r.id !== id);
    
    // Write back to file
    fs.writeFileSync(responsesFile, JSON.stringify(responses, null, 2));
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete response' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

