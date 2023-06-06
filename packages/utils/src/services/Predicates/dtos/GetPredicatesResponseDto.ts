import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";
import { IPredicateClientModel, PredicateClientModel } from "../models";

export interface IGetPredicatesResponseDto extends IBaseModel {
  items: Array<IPredicateClientModel>;
}

@JsonObject()
export class GetPredicatesResponseDto
  extends BaseModel
  implements IGetPredicatesResponseDto
{
  @JsonProperty()
  items: PredicateClientModel[];
}
