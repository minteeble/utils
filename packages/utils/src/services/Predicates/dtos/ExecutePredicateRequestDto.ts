import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IExecutePredicateRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class ExecutePredicateRequestDto
  extends RequestDto
  implements IExecutePredicateRequestDto
{
  @JsonProperty()
  id: string;
}
