import { BaseModel, IBaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface INavigationPageClientModel extends IBaseModel {
  /**
   * Page name
   */
  name: string;

  /**
   * Page title
   */
  title: string;

  /**
   * Page path inside the frontend
   */
  path: string;

  /**
   * Short page description
   */
  tooltip?: string;
}

@JsonObject()
export class NavigationPageClientModel
  extends BaseModel
  implements INavigationPageClientModel
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  path: string;

  @JsonProperty()
  tooltip?: string;
}
