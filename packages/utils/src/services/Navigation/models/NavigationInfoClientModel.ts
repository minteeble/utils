import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationSectionClientModel } from "./NavigationSectionClientModel";

export interface INavigationInfoClientModel extends IBaseModel {
  /**
   * Array containing all the sections
   */
  sections: NavigationSectionClientModel[];
}

@JsonObject()
export class NavigationInfo
  extends BaseModel
  implements INavigationInfoClientModel
{
  @JsonProperty()
  sections: NavigationSectionClientModel[];
}
