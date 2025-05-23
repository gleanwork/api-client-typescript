/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GleanCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { GleanError } from "../models/errors/gleanerror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Fetches documents visibility.
 *
 * @remarks
 * Fetches the visibility override status of the documents passed.
 */
export function clientGovernanceDocumentsVisibilityoverridesList(
  client: GleanCore,
  docIds?: Array<string> | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.GetDocumentVisibilityOverridesResponse,
    | GleanError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    docIds,
    options,
  ));
}

async function $do(
  client: GleanCore,
  docIds?: Array<string> | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.GetDocumentVisibilityOverridesResponse,
      | GleanError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const input: operations.GetdocvisibilityRequest = {
    docIds: docIds,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetdocvisibilityRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc(
    "/rest/api/v1/governance/documents/visibilityoverrides",
  )();

  const query = encodeFormQuery({
    "docIds": payload.docIds,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json; charset=UTF-8",
  }));

  const secConfig = await extractSecurity(client._options.apiToken);
  const securityInput = secConfig == null ? {} : { apiToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getdocvisibility",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["403", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const [result] = await M.match<
    components.GetDocumentVisibilityOverridesResponse,
    | GleanError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      components.GetDocumentVisibilityOverridesResponse$inboundSchema,
      { ctype: "application/json; charset=UTF-8" },
    ),
    M.fail([403, "4XX"]),
    M.fail([500, "5XX"]),
  )(response);
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
