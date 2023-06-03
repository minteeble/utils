import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetContentRequestDto extends IBaseModel {
  sectionId: string;
  contentId: string;
  reservedAreaUrlName: string;
}

@JsonObject()
export class GetContentRequestDto
  extends RequestDto
  implements IGetContentRequestDto
{
  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  contentId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
