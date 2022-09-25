import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface ICreateWebhookListenerResponseDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class CreateWebhookListenerResponseDto
  extends BaseModel
  implements ICreateWebhookListenerResponseDto
{
  @JsonProperty()
  id: string;
}
