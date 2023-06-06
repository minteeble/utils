import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";
import { PredicateParameterValue } from "../models";

export interface IExecutePredicateRequestDto extends IBaseModel {
  id: string;
  context: Array<PredicateParameterValue>;
}

@JsonObject()
export class ExecutePredicateRequestDto
  extends RequestDto
  implements IExecutePredicateRequestDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  context: PredicateParameterValue[];
}
