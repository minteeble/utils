import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { inputParameter } from "../models";

export interface ICreatePredicateRequestDto extends IBaseModel {
  code: string;
  inputParameters: Array<inputParameter>;
}

@JsonObject()
export class CreatePredicateRequestDto
  extends RequestDto
  implements ICreatePredicateRequestDto
{
  @JsonProperty()
  code: string;

  @JsonProperty()
  inputParameters: inputParameter[];
}
