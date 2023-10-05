import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationPageClientModel } from "./NavigationPageClientModel";

export interface INavigationSectionClientModel extends IBaseModel {
  /**
   * Section title
   */
  title: string;

  /**
   * Section pages
   */
  pages: NavigationPageClientModel[];
}

@JsonObject()
export class NavigationSectionClientModel
  extends BaseModel
  implements INavigationSectionClientModel
{
  @JsonProperty()
  title: string;

  @JsonProperty()
  pages: NavigationPageClientModel[];
}
