import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationSectionClientModel } from "./NavigationSectionClientModel";

export interface INavigationGroupClientModel extends IBaseModel {
  /**
   * Array containing all the sections
   */
  sections: NavigationSectionClientModel[];
}

@JsonObject()
export class NavigationInfo
  extends BaseModel
  implements INavigationGroupClientModel
{
  @JsonProperty()
  sections: NavigationSectionClientModel[];
}
