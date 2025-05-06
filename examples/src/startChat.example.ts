import { config } from "dotenv";
config();
import { Glean } from "@gleanwork/api-client";
import { GleanError } from "@gleanwork/api-client/models/errors";

if (!process.env["GLEAN_DOMAIN"]) {
  throw new Error("GLEAN_DOMAIN is not set");
}

if (!process.env["GLEAN_BEARER_AUTH"]) {
  throw new Error("GLEAN_BEARER_AUTH is not set");
}

const glean = new Glean({
  domain: "customerName",
  apiToken: process.env["GLEAN_BEARER_AUTH"],
});

try {
  const data = await glean.client.chat.create({
    messages: [
      {
        fragments: [{ text: "What are the company holidays this year?" }],
      },
    ],
  });
  console.log(data);
} catch (error) {
  if (error instanceof GleanError) {
    console.error(error.message);
    console.error(error.statusCode);
    console.error(error.rawResponse);
    console.error(error.body);
  }

  throw error;
}
