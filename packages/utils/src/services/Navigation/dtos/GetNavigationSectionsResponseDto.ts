import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import {
  INavigationPageClientModel,
  NavigationPageClientModel,
} from "../models";

export interface IGetNavigationSectionsResponseDto extends IBaseModel {
  sections: string[];

  pages: INavigationPageClientModel[];
}

@JsonObject()
export class GetNavigationSectionsResponseDto
  extends BaseModel
  implements IGetNavigationSectionsResponseDto
{
  @JsonProperty()
  sections: string[];

  @JsonProperty()
  pages: NavigationPageClientModel[];
}
