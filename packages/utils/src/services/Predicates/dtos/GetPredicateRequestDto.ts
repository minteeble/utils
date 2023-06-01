import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetPredicateRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class GetPredicateRequestDto
  extends RequestDto
  implements IGetPredicateRequestDto
{
  @JsonProperty()
  id: string;
}
