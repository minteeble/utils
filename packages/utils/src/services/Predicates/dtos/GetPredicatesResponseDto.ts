import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";
import {
  IPredicatePreviewClientModel,
  PredicatePreviewClientModel,
} from "../models";

export interface IGetPredicatesResponseDto extends IBaseModel {
  items: Array<IPredicatePreviewClientModel>;
}

@JsonObject()
export class GetPredicatesResponseDto
  extends BaseModel
  implements IGetPredicatesResponseDto
{
  @JsonProperty()
  items: PredicatePreviewClientModel[];
}
