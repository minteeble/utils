import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationPageClientModel } from "./NavigationPageClientModel";

export interface INavigationSectionClientModel extends IBaseModel {
  /**
   * Section name
   */
  name: string;

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
  name: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  pages: NavigationPageClientModel[];
}
