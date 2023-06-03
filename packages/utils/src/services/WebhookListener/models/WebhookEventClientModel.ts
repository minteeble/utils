import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IWebhookEventClientModel extends IBaseModel {
  method: string;

  payload: any;

  id: string;

  listenerId: string;

  timestamp: string;
}

@JsonObject()
export class WebhookEventClientModel
  extends BaseModel
  implements IWebhookEventClientModel
{
  @JsonProperty()
  method: string;

  @JsonProperty()
  payload: any;

  @JsonProperty()
  id: string;

  @JsonProperty()
  listenerId: string;

  @JsonProperty()
  timestamp: string;
}
