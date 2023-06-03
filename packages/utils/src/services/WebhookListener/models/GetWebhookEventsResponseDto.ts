import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, IRequestDto } from "../../../models";
import { WebhookEventClientModel } from "./WebhookEventClientModel";

export interface IGetWebhookEventsResponseDto extends IBaseModel {
  events: Array<WebhookEventClientModel>;
}

@JsonObject()
export class GetWebhookEventsResponseDto
  extends BaseModel
  implements IGetWebhookEventsResponseDto
{
  @JsonProperty({ type: WebhookEventClientModel })
  events: Array<WebhookEventClientModel>;
}
