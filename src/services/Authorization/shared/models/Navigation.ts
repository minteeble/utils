import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

/**
 * Interface for NavigatioRoute model
 */
export interface INavigationRouteClientModel extends IBaseModel {
  /**
   * Displayed name
   */
  displayedName: string;

  /**
   * URL on the client
   */
  url: string;

  /**
   * Icon info
   */
  icon: string;
}

/**
 * NavigationRoute model
 */
@JsonObject()
export class NavigationRouteClientModel
  extends BaseModel
  implements INavigationRouteClientModel
{
  @JsonProperty()
  displayedName: string;

  @JsonProperty()
  url: string;

  @JsonProperty()
  icon: string;
}

export interface INavigationCategoryClientModel
  extends INavigationRouteClientModel {
  routes: Array<INavigationRouteClientModel>;
}

@JsonObject()
export class NavigationCategoryClientModel
  extends NavigationRouteClientModel
  implements INavigationCategoryClientModel
{
  routes: Array<NavigationRouteClientModel>;
}

/**
 * Navigation extension interface
 */
export interface INavigationExtensionClientModel extends IBaseModel {
  /**
   * Name displayed in the UI as it is a category name
   */
  displayedName: string;

  /**
   * Icon info
   */
  icon: string;

  /**
   * API endpoint in which the client can get additional routes
   */
  dataEndpoint: string;
}

/**
 * Navigation extension model, used for adding dynamic routes
 */
@JsonObject()
export class NavigationExtensionClientModel
  extends BaseModel
  implements INavigationExtensionClientModel
{
  @JsonProperty()
  displayedName: string;

  @JsonProperty()
  icon: string;

  @JsonProperty()
  dataEndpoint: string;
}
