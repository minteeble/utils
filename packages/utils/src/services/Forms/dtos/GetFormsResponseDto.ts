import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { FormClientModel } from "../models";

export interface IGetFormsResponseDto extends IBaseModel {
  forms: Array<FormClientModel>;
}

@JsonObject()
export class GetFormsResponseDto
  extends BaseModel
  implements IGetFormsResponseDto
{
  @JsonProperty()
  forms: FormClientModel[];
}
