import { BaseModel, IBaseModel } from "../../../../shared";

export interface ICreateNftCollectionRequestDto extends IBaseModel {}

export class CreateNftCollectionRequestDto
  extends BaseModel
  implements ICreateNftCollectionRequestDto {}
