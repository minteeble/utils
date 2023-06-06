import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IUpdatePredicateRequestDto extends IBaseModel {
  name: string;
  id: string;
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
}
