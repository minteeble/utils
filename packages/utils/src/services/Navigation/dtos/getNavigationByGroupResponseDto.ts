import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  INavigationCategoryClientModel,
  INavigationExtensionClientModel,
  NavigationCategoryClientModel,
  NavigationExtensionClientModel,
} from "../../../models";
export interface IGetNavigationByGroupResponseDto extends IBaseModel {
  categories: Array<INavigationCategoryClientModel>;

  extensions: Array<INavigationExtensionClientModel>;
}

@JsonObject()
export class GetNavigationByGroupResponseDto
  extends BaseModel
  implements IGetNavigationByGroupResponseDto
{
  @JsonProperty({ type: NavigationCategoryClientModel })
  categories: Array<NavigationCategoryClientModel>;

  @JsonProperty({ type: NavigationExtensionClientModel })
  extensions: Array<NavigationExtensionClientModel>;
}
