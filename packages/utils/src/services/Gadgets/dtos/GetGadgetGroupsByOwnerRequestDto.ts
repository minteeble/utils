import { IBaseModel, RequestDto } from "../../../models";

export interface IGetGadgetGroupsByOwnerRequestDto extends IBaseModel {}

export class GetGadgetGroupsByOwnerRequestDto
  extends RequestDto
  implements IGetGadgetGroupsByOwnerRequestDto {}
