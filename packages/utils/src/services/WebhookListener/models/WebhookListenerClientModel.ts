import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IWebhookListenerClientModel extends IBaseModel {
  name: string;

  viewers: Array<string>;

  id: string;

  owner: string;
}

@JsonObject()
export class WebhookListenerClientModel
  extends BaseModel
  implements IWebhookListenerClientModel
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  viewers: Array<string>;

  @JsonProperty()
  id: string;

  @JsonProperty()
  owner: string;
}
