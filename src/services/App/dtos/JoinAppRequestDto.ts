import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IJoinAppRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class JoinAppRequestDto
  extends RequestDto
  implements IJoinAppRequestDto
{
  @JsonProperty()
  urlName: string;
}
