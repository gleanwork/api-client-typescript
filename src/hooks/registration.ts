import { Hooks, AfterErrorHook } from './types.js';

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

const agentFileUploadErrorHook: AfterErrorHook = {
  afterError: async (hookCtx, response, error) => {
    if (
      (hookCtx.operationID === 'createAndWaitRun' ||
        hookCtx.operationID === 'createAndStreamRun') &&
      response?.status === 400
    ) {
      const errorMessage = String(error);
      // The API returns "Not enough user permissions" when it fails to parse the file ID string
      if (errorMessage.includes('permission')) {
        return {
          response,
          error: new Error(
            `Agent file upload error: When using agents with file inputs, you must follow a two-step process:\n` +
              `\n1. First, upload files using client.chat.uploadFiles():\n` +
              `   const uploadResult = await glean.client.chat.uploadFiles({\n` +
              `     files: [fileBlob]\n` +
              `   });\n` +
              `\n2. Then, pass the returned file IDs (not Blob/File objects) in the input field:\n` +
              `   const result = await glean.client.agents.run({\n` +
              `     agentId: '<agent-id>',\n` +
              `     input: {\n` +
              `       myFile: uploadResult.files[0].id  // Use the file ID\n` +
              `     }\n` +
              `   });\n` +
              `\nFor a complete example, see: examples/src/agentWithFileUpload.example.ts\n` +
              `Documentation: https://developers.glean.com/api/client-api/agents/overview\n` +
              `\nOriginal error: ${errorMessage}`
          ),
        };
      }
    }
    return { response, error };
  },
};

export function initHooks(hooks: Hooks) {
  // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
  // with an instance of a hook that implements that specific Hook interface
  // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
  hooks.registerAfterErrorHook(agentFileUploadErrorHook);
}
