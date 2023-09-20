import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetGadgetsZipFileUploadUrlRequestDto extends IBaseModel {
  groupId: string;
}

@JsonObject()
export class GetGadgetsZipFileUploadUrlRequestDto
  extends RequestDto
  implements IGetGadgetsZipFileUploadUrlRequestDto
{
  @JsonProperty()
  groupId: string;
}
