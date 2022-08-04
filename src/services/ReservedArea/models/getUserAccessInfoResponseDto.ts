import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared/models/BaseModel";

export interface IAccesssConditionResult {
  authorized: boolean;
  contractAddress: string;
  balance: number;
  items: Array<any>;
}

@JsonObject()
export class AccesssConditionResult
  extends BaseModel
  implements IAccesssConditionResult
{
  @JsonProperty({ required: true })
  authorized: boolean;

  @JsonProperty({ required: true })
  contractAddress: string;

  @JsonProperty({ required: true })
  balance: number;

  @JsonProperty({ required: true })
  items: Array<any>;

  constructor() {
    super();
  }
}

export interface IGetUserAccessInfoResponseDto extends IBaseModel {
  authorizations: Array<IAccesssConditionResult>;
}

@JsonObject()
export class GetUserAccessInfoResponseDto
  extends BaseModel
  implements IGetUserAccessInfoResponseDto
{
  @JsonProperty({ required: true })
  authorizations: Array<AccesssConditionResult>;

  constructor() {
    super();
  }
}
