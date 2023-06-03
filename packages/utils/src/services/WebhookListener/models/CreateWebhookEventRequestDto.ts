import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IRequestDto } from "../../../models";

export interface ICreateWebhookEventRequestDto {
  listenerId: string;
}

@JsonObject()
export class CreateWebhookEventRequestDto
  extends BaseModel
  implements IRequestDto, ICreateWebhookEventRequestDto
{
  @JsonProperty()
  listenerId: string;

  isValid(): boolean {
    return typeof this.listenerId !== "undefined" && this.listenerId.length > 0;
  }
}
