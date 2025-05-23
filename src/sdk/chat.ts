/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { clientChatCreate } from "../funcs/clientChatCreate.js";
import { clientChatCreateStream } from "../funcs/clientChatCreateStream.js";
import { clientChatDelete } from "../funcs/clientChatDelete.js";
import { clientChatDeleteAll } from "../funcs/clientChatDeleteAll.js";
import { clientChatDeleteFiles } from "../funcs/clientChatDeleteFiles.js";
import { clientChatList } from "../funcs/clientChatList.js";
import { clientChatRetrieve } from "../funcs/clientChatRetrieve.js";
import { clientChatRetrieveApplication } from "../funcs/clientChatRetrieveApplication.js";
import { clientChatRetrieveFiles } from "../funcs/clientChatRetrieveFiles.js";
import { clientChatUploadFiles } from "../funcs/clientChatUploadFiles.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Chat extends ClientSDK {
  /**
   * Chat
   *
   * @remarks
   * Have a conversation with Glean AI.
   */
  async create(
    chatRequest: components.ChatRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.ChatResponse> {
    return unwrapAsync(clientChatCreate(
      this,
      chatRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Deletes all saved Chats owned by a user
   *
   * @remarks
   * Deletes all saved Chats a user has had and all their contained conversational content.
   */
  async deleteAll(
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(clientChatDeleteAll(
      this,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Deletes saved Chats
   *
   * @remarks
   * Deletes saved Chats and all their contained conversational content.
   */
  async delete(
    deleteChatsRequest: components.DeleteChatsRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(clientChatDelete(
      this,
      deleteChatsRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Retrieves a Chat
   *
   * @remarks
   * Retrieves the chat history between Glean Assistant and the user for a given Chat.
   */
  async retrieve(
    getChatRequest: components.GetChatRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.GetChatResponse> {
    return unwrapAsync(clientChatRetrieve(
      this,
      getChatRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Retrieves all saved Chats
   *
   * @remarks
   * Retrieves all the saved Chats between Glean Assistant and the user. The returned Chats contain only metadata and no conversational content.
   */
  async list(
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.ListChatsResponse> {
    return unwrapAsync(clientChatList(
      this,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Gets the metadata for a custom Chat application
   *
   * @remarks
   * Gets the Chat application details for the specified application ID.
   */
  async retrieveApplication(
    getChatApplicationRequest: components.GetChatApplicationRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.GetChatApplicationResponse> {
    return unwrapAsync(clientChatRetrieveApplication(
      this,
      getChatApplicationRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Upload files for Chat.
   *
   * @remarks
   * Upload files for Chat.
   */
  async uploadFiles(
    uploadChatFilesRequest: components.UploadChatFilesRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.UploadChatFilesResponse> {
    return unwrapAsync(clientChatUploadFiles(
      this,
      uploadChatFilesRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Get files uploaded by a user for Chat.
   *
   * @remarks
   * Get files uploaded by a user for Chat.
   */
  async retrieveFiles(
    getChatFilesRequest: components.GetChatFilesRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.GetChatFilesResponse> {
    return unwrapAsync(clientChatRetrieveFiles(
      this,
      getChatFilesRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Delete files uploaded by a user for chat.
   *
   * @remarks
   * Delete files uploaded by a user for Chat.
   */
  async deleteFiles(
    deleteChatFilesRequest: components.DeleteChatFilesRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(clientChatDeleteFiles(
      this,
      deleteChatFilesRequest,
      timezoneOffset,
      options,
    ));
  }

  /**
   * Chat
   *
   * @remarks
   * Have a conversation with Glean AI.
   */
  async createStream(
    chatRequest: components.ChatRequest,
    timezoneOffset?: number | undefined,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(clientChatCreateStream(
      this,
      chatRequest,
      timezoneOffset,
      options,
    ));
  }
}
