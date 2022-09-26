import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import { WebhookListenerClientModel } from "./WebhookListenerClientModel";

export interface IGetListenersResponseDto extends IBaseModel {
  listeners: Array<WebhookListenerClientModel>;
}

@JsonObject()
export class GetListenersResponseDto
  extends BaseModel
  implements IGetListenersResponseDto
{
  @JsonProperty()
  listeners: Array<WebhookListenerClientModel>;
}
