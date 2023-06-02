import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ICreateFormRequestDto extends IBaseModel {
  id: string;
  formName: string;
  createdAt: string;
}

@JsonObject()
export class CreateFormRequestDto
  extends RequestDto
  implements ICreateFormRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  formName: string;

  @JsonProperty()
  createdAt: string;
}
