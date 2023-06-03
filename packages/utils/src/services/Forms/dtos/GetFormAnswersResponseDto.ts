import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { FormAnswerClientModel } from "../models";

export interface IGetFormAnswersResponseDto extends IBaseModel {
  answers: Array<FormAnswerClientModel>;
}

@JsonObject()
export class GetFormAnswersResponseDto
  extends BaseModel
  implements IGetFormAnswersResponseDto
{
  @JsonProperty()
  answers: FormAnswerClientModel[];
}
