import { IBaseModel, RequestDto } from "../../../models";
import { JsonProperty, JsonObject } from "typescript-json-serializer";

export interface IDeleteRedeemedRequestDto extends IBaseModel {
  id: string;
}

@JsonObject()
export class DeleteRedeemedRequestDto
  extends RequestDto
  implements IDeleteRedeemedRequestDto
{
  @JsonProperty()
  id: string;
}
