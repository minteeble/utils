import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface ILeaveAppRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class LeaveAppRequestDto
  extends RequestDto
  implements ILeaveAppRequestDto
{
  @JsonProperty()
  urlName: string;
}
