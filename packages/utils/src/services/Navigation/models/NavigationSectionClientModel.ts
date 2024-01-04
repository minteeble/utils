import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { NavigationPageClientModel } from "./NavigationPageClientModel";

/**
 * Role visibility
 */
export enum RoleType {
  USER = "user",
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
}

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
