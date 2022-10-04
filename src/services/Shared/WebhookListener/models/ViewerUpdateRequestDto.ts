import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  IRequestDto,
  RequestDto,
} from "../../../../shared";

export interface IViewerUpdateRequestDto extends IRequestDto {
  listenerId: string;

  viewerAddress: string;
}

/**
 * RequestDto for handling edits on viewers array
 */
@JsonObject()
export class ViewerUpdateRequestDto
  extends RequestDto
  implements IViewerUpdateRequestDto
{
  @JsonProperty()
  listenerId: string;

  @JsonProperty()
  viewerAddress: string;
}
