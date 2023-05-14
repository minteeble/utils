import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGadgetGroupsByOwnerRequestDto extends IBaseModel {}

export class GetGadgetGroupsByOwnerRequestDto
  extends RequestDto
  implements IGetGadgetGroupsByOwnerRequestDto {}
