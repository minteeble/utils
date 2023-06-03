import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel, RequestDto } from "../../../models";

export interface IFormAnswerClientModel extends IBaseModel {
  id: string;

  formId: string;

  createdAt: string;

  sender?: string;

  fields: { [key: string]: any };
}

@JsonObject()
export class FormAnswerClientModel
  extends BaseModel
  implements IFormAnswerClientModel
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
