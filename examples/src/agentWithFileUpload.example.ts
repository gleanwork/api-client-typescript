import { config } from 'dotenv';
config();
import { Glean } from '@gleanwork/api-client';

const glean = new Glean({
  domain: process.env['GLEAN_DOMAIN'] ?? '',
  apiToken: process.env['GLEAN_BEARER_AUTH'] ?? '',
});

async function run() {
  // 1. Upload the file first
  const fileBlob = new Blob(['name,role\nAlice,Engineer'], { type: 'text/csv' });

  const uploadResponse = await glean.client.chat.uploadFiles({
    files: [fileBlob as any],
  });

  const fileId = uploadResponse.files[0].id;
  console.log(`File uploaded: ${fileId}`);

  // 2. Pass the file ID (NOT the blob) to the agent
  const result = await glean.client.agents.run({
    agentId: process.env['GLEAN_AGENT_ID']!,
    input: {
      file_input: fileId, // ✅ Pass the ID string
    },
  });

  console.log('Agent run result:', result);
}

run();
