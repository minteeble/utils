import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface ICreateWebhookListenerRequestDto extends IBaseModel {
  name: string;
}

@JsonObject()
export class CreateWebhookListenerRequestDto
  extends BaseModel
  implements ICreateWebhookListenerRequestDto
{
  @JsonProperty()
  name: string;
}
