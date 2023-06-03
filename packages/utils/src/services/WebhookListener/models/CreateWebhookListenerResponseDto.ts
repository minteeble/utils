import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

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
