import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface INavigationGroupClientModel extends IBaseModel {
  /**
   * Array containing all the sections
   */
  sections: string[];
}

@JsonObject()
export class NavigationInfo
  extends BaseModel
  implements INavigationGroupClientModel
{
  @JsonProperty()
  sections: string[];
}
