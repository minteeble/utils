import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IDeleteFormRequestDto extends IBaseModel {
  formId: string;
}

@JsonObject()
export class DeleteFormRequestDto
  extends RequestDto
  implements IDeleteFormRequestDto
{
  @JsonProperty()
  formId: string;
}
