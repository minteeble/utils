import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateFormRequestDto extends IBaseModel {
  formName: string;
}

@JsonObject()
export class CreateFormRequestDto
  extends RequestDto
  implements ICreateFormRequestDto
{
  @JsonProperty()
  formName: string;
}
