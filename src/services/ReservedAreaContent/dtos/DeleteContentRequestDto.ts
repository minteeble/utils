import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IDeleteContentRequestDto extends IBaseModel {
  sectionId: string;
  contentId: string;
  reservedAreaUrlName: string;
}

@JsonObject()
export class DeleteContentRequestDto
  extends RequestDto
  implements IDeleteContentRequestDto
{
  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  contentId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
