import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import { IRequestDto } from "../../../../shared/models/RequestDto";

export interface ICreateWebhookListenerRequestDto {
  name: string;
}

@JsonObject()
export class CreateWebhookListenerRequestDto
  extends BaseModel
  implements IRequestDto, ICreateWebhookListenerRequestDto
{
  isValid(): boolean {
    let returnValue = true;

    if (!this.name || this.name.length === 0) returnValue = false;
    return returnValue;
  }

  @JsonProperty()
  name: string;
}
