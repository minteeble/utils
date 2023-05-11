import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export interface ISectionClientModel extends IBaseModel {
  policyId: string;

  id: string;
}

@JsonObject()
export class SectionClientModel
  extends BaseModel
  implements ISectionClientModel
{
  @JsonProperty()
  policyId: string;

  @JsonProperty()
  id: string;
}
