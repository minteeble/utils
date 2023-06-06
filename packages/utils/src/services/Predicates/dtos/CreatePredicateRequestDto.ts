import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { PredicateParameter } from "../models";

export interface ICreatePredicateRequestDto extends IBaseModel {
  code: string;
  parameters: Array<PredicateParameter>;
  name: string;
}

@JsonObject()
export class CreatePredicateRequestDto
  extends RequestDto
  implements ICreatePredicateRequestDto
{
  @JsonProperty()
  code: string;

  @JsonProperty()
  parameters: PredicateParameter[];

  @JsonProperty()
  name: string;
}
