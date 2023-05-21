import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IDtoModel } from ".";

export interface IRequestDto extends IDtoModel {}

@JsonObject()
export class RequestDto extends BaseModel implements IRequestDto {
  isValid(): boolean {
    return true;
  }
}
