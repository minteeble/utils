import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetFormRequestDto extends IBaseModel {
  formId: string;
}

@JsonObject()
export class GetFormRequestDto
  extends RequestDto
  implements IGetFormRequestDto
{
  @JsonProperty()
  formId: string;
}
