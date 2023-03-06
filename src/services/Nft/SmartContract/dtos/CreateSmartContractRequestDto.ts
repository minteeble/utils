import { BaseModel, IBaseModel, RequestDto } from "../../../../shared";

export interface ICreateSmartContractRequestDto extends IBaseModel {}

export class CreateSmartContractRequestDto
  extends RequestDto
  implements ICreateSmartContractRequestDto {}
