import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetGadgetsBatchUploadUrlRequestDto extends IBaseModel {
  groupId: string;
}

@JsonObject()
export class GetGadgetsBatchUploadUrlRequestDto
  extends RequestDto
  implements IGetGadgetsBatchUploadUrlRequestDto
{
  @JsonProperty()
  groupId: string;
}
