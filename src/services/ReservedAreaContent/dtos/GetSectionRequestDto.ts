import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";

export interface IGetSectionRequestDto extends IBaseModel {
  sectionId: string;
  reservedAreaUrlName: string;
}

@JsonObject()
export class GetSectionRequestDto
  extends RequestDto
  implements IGetSectionRequestDto
{
  @JsonProperty()
  sectionId: string;

  @JsonProperty()
  reservedAreaUrlName: string;
}
