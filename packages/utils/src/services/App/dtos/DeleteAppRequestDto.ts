import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IDeleteAppRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class DeleteAppRequestDto
  extends RequestDto
  implements IDeleteAppRequestDto
{
  @JsonProperty()
  urlName: string;
}
