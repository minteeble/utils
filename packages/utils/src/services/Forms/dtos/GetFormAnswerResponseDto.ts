import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetFormAnswerResponseDto extends IBaseModel {
  id: string;
  formId: string;
  createdAt: string;
  sender?: string;
  fields: { [key: string]: any };
}

@JsonObject()
export class GetFormAnswerResponseDto
  extends BaseModel
  implements IGetFormAnswerResponseDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  formId: string;

  @JsonProperty()
  createdAt: string;

  @JsonProperty()
  sender?: string;

  @JsonProperty()
  fields: { [key: string]: any };
}
