/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientToolsList } from "../funcs/clientToolsList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ClientToolsListQueryData = components.ToolsListResponse;

/**
 * List available tools
 *
 * @remarks
 * Returns a filtered set of available tools based on optional tool name parameters. If no filters are provided, all available tools are returned.
 */
export function useClientToolsList(
  toolNames?: Array<string> | undefined,
  options?: QueryHookOptions<ClientToolsListQueryData>,
): UseQueryResult<ClientToolsListQueryData, Error> {
  const client = useGleanContext();
  return useQuery({
    ...buildClientToolsListQuery(
      client,
      toolNames,
      options,
    ),
    ...options,
  });
}

/**
 * List available tools
 *
 * @remarks
 * Returns a filtered set of available tools based on optional tool name parameters. If no filters are provided, all available tools are returned.
 */
export function useClientToolsListSuspense(
  toolNames?: Array<string> | undefined,
  options?: SuspenseQueryHookOptions<ClientToolsListQueryData>,
): UseSuspenseQueryResult<ClientToolsListQueryData, Error> {
  const client = useGleanContext();
  return useSuspenseQuery({
    ...buildClientToolsListQuery(
      client,
      toolNames,
      options,
    ),
    ...options,
  });
}

export function prefetchClientToolsList(
  queryClient: QueryClient,
  client$: GleanCore,
  toolNames?: Array<string> | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildClientToolsListQuery(
      client$,
      toolNames,
    ),
  });
}

export function setClientToolsListData(
  client: QueryClient,
  queryKeyBase: [parameters: { toolNames?: Array<string> | undefined }],
  data: ClientToolsListQueryData,
): ClientToolsListQueryData | undefined {
  const key = queryKeyClientToolsList(...queryKeyBase);

  return client.setQueryData<ClientToolsListQueryData>(key, data);
}

export function invalidateClientToolsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { toolNames?: Array<string> | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gleanwork/api-client", "tools", "list", ...queryKeyBase],
  });
}

export function invalidateAllClientToolsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gleanwork/api-client", "tools", "list"],
  });
}

export function buildClientToolsListQuery(
  client$: GleanCore,
  toolNames?: Array<string> | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ClientToolsListQueryData>;
} {
  return {
    queryKey: queryKeyClientToolsList({ toolNames }),
    queryFn: async function clientToolsListQueryFn(
      ctx,
    ): Promise<ClientToolsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(clientToolsList(
        client$,
        toolNames,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyClientToolsList(
  parameters: { toolNames?: Array<string> | undefined },
): QueryKey {
  return ["@gleanwork/api-client", "tools", "list", parameters];
}
