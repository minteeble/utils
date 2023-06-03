import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ISendFormAnswerRequestDto extends IBaseModel {
  formId: string;

  fields: { [key: string]: any };
}

@JsonObject()
export class SendFormAnswerRequestDto
  extends RequestDto
  implements ISendFormAnswerRequestDto
{
  @JsonProperty()
  fields: { [key: string]: any };

  @JsonProperty()
  formId: string;
}
