import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IDeletePredicateRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class DeletePredicateRequestDto
  extends RequestDto
  implements IDeletePredicateRequestDto
{
  @JsonProperty()
  id: string;
}
