import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetFormAnswerRequestDto extends IBaseModel {
  formId: string;
  answerId: string;
}

@JsonObject()
export class GetFormAnswerRequestDto
  extends RequestDto
  implements IGetFormAnswerRequestDto
{
  @JsonProperty()
  formId: string;

  @JsonProperty()
  answerId: string;
}
