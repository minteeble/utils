import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface ICreateRedeemedRequestDto extends IBaseModel {
  configId: string;
}

@JsonObject()
export class CreateRedeemedRequestDto
  extends RequestDto
  implements ICreateRedeemedRequestDto
{
  @JsonProperty()
  configId: string;
}
