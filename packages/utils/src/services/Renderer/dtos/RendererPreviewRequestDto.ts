import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";
import { CollectionRenderFileType } from "../../NftCollection";

export interface IRendererPreviewRequestDto extends IBaseModel {
  rendererId: string;

  fileType: CollectionRenderFileType;

  requestedFilename: string;
}

@JsonObject()
export class RendererPreviewRequestDto
  extends RequestDto
  implements IRendererPreviewRequestDto
{
  @JsonProperty()
  rendererId: string;

  @JsonProperty()
  fileType: CollectionRenderFileType;

  @JsonProperty()
  requestedFilename: string;
}
