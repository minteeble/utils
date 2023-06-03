import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IRequestDto } from "../../../models";

export interface IGetWebhookEventsRequestDto {
  listenerId: string;
}

@JsonObject()
export class GetWebhookEventsRequestDto
  extends BaseModel
  implements IRequestDto, IGetWebhookEventsRequestDto
{
  @JsonProperty()
  listenerId: string;

  isValid(): boolean {
    return typeof this.listenerId !== "undefined" && this.listenerId.length > 0;
  }
}
