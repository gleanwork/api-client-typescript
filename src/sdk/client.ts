/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Activity } from "./activity.js";
import { Agents } from "./agents.js";
import { Announcements } from "./announcements.js";
import { Answers } from "./answers.js";
import { Chat } from "./chat.js";
import { ClientAuthentication } from "./clientauthentication.js";
import { ClientDocuments } from "./clientdocuments.js";
import { ClientShortcuts } from "./clientshortcuts.js";
import { Collections } from "./collections.js";
import { Entities } from "./entities.js";
import { Governance } from "./governance.js";
import { Insights } from "./insights.js";
import { Messages } from "./messages.js";
import { Pins } from "./pins.js";
import { Search } from "./search.js";
import { Tools } from "./tools.js";
import { Verification } from "./verification.js";

export class Client extends ClientSDK {
  private _activity?: Activity;
  get activity(): Activity {
    return (this._activity ??= new Activity(this._options));
  }

  private _announcements?: Announcements;
  get announcements(): Announcements {
    return (this._announcements ??= new Announcements(this._options));
  }

  private _answers?: Answers;
  get answers(): Answers {
    return (this._answers ??= new Answers(this._options));
  }

  private _authentication?: ClientAuthentication;
  get authentication(): ClientAuthentication {
    return (this._authentication ??= new ClientAuthentication(this._options));
  }

  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _agents?: Agents;
  get agents(): Agents {
    return (this._agents ??= new Agents(this._options));
  }

  private _collections?: Collections;
  get collections(): Collections {
    return (this._collections ??= new Collections(this._options));
  }

  private _documents?: ClientDocuments;
  get documents(): ClientDocuments {
    return (this._documents ??= new ClientDocuments(this._options));
  }

  private _insights?: Insights;
  get insights(): Insights {
    return (this._insights ??= new Insights(this._options));
  }

  private _messages?: Messages;
  get messages(): Messages {
    return (this._messages ??= new Messages(this._options));
  }

  private _pins?: Pins;
  get pins(): Pins {
    return (this._pins ??= new Pins(this._options));
  }

  private _search?: Search;
  get search(): Search {
    return (this._search ??= new Search(this._options));
  }

  private _entities?: Entities;
  get entities(): Entities {
    return (this._entities ??= new Entities(this._options));
  }

  private _shortcuts?: ClientShortcuts;
  get shortcuts(): ClientShortcuts {
    return (this._shortcuts ??= new ClientShortcuts(this._options));
  }

  private _verification?: Verification;
  get verification(): Verification {
    return (this._verification ??= new Verification(this._options));
  }

  private _tools?: Tools;
  get tools(): Tools {
    return (this._tools ??= new Tools(this._options));
  }

  private _governance?: Governance;
  get governance(): Governance {
    return (this._governance ??= new Governance(this._options));
  }
}
