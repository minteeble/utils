import { JsonObject } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetNavigationSectionsRequestDto extends IBaseModel {}

@JsonObject()
export class GetNavigationSectionsRequestDto
  extends RequestDto
  implements IGetNavigationSectionsRequestDto {}
