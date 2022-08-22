import { IBaseModel } from "../../../../shared";
import {
  INavigationCategoryClientModel,
  INavigationExtensionClientModel,
} from "../../shared";

export interface IGetNavigationByGroupResponseDto extends IBaseModel {
  categories: Array<INavigationCategoryClientModel>;

  extensions: Array<INavigationExtensionClientModel>;
}
