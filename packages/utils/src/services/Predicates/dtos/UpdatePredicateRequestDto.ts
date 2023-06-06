import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { PredicateParameter } from "../models";

export interface IUpdatePredicateRequestDto extends IBaseModel {
  name: string;
  id: string;
  parameters: Array<PredicateParameter>;
  code: string;
}

@JsonObject()
export class UpdatePredicateRequestDto
  extends RequestDto
  implements IUpdatePredicateRequestDto
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  id: string;

  @JsonProperty()
  parameters: PredicateParameter[];

  @JsonProperty()
  code: string;
}
