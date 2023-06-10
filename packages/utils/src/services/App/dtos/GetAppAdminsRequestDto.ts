import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetAppAdminsRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class GetAppAdminsRequestDto
  extends RequestDto
  implements IGetAppAdminsRequestDto
{
  @JsonProperty()
  urlName: string;
}
