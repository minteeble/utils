import { JsonObject } from "typescript-json-serializer";
import { IBaseModel } from "../../../../shared";
import {
  ISmartContractClientModel,
  SmartContractClientModel,
} from "../models/SmartContractClientModel";

export interface IGetSmartContractResponseDto
  extends ISmartContractClientModel {}

@JsonObject()
export class GetSmartContractResponseDto
  extends SmartContractClientModel
  implements IGetSmartContractResponseDto {}
