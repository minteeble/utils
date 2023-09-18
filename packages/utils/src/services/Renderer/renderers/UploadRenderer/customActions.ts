import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { CustomActionRequestDTO, CustomActionResponseDTO } from "../../models";

/**
 * Names of `UploadRenderer` custom actions
 */
export enum UploadRendererCustomActionNames {
  RegisterPremintUpload = "register-premint-upload-request",
  ConfirmPremintItemsUploaded = "confirm-premint-items-uploaded",
  ConfirmItemsMinted = "confirm-items-minted",
  RegisterPostmintUpload = "register-postmint-upload",
  ConfirmPostmintItemsUploaded = "confirm-postmint-items-uploaded",
}

// --- RegisterPremintUpload ---

/**
 * DTO interface for registering request (for uploading items)
 */
export interface IRegisterPremintUploadRequestDto {}

@JsonObject()
export class RegisterPremintUploadRequestDto
  extends CustomActionRequestDTO
  implements IRegisterPremintUploadRequestDto {}

export interface IRegisterPremintUploadResponseDto {
  /**
   * Pre-signed url for upoading metadata file
   */
  uploadMetadataUrl: string;

  /**
   * Pre-signed url for upoading image file
   */
  uploadImageUrl: string;

  /**
   * RequestId to be used for confirming items uploaded, and also for pairing mint operation
   */
  requestId: string;
}

/**
 * Response containing urls for uploading files
 */
@JsonObject()
export class RegisterPremintUploadResponseDto
  extends CustomActionResponseDTO
  implements IRegisterPremintUploadResponseDto
{
  @JsonProperty({ required: true })
  uploadMetadataUrl: string;

  @JsonProperty({ required: true })
  uploadImageUrl: string;

  @JsonProperty({ required: true })
  requestId: string;
}

// --- ConfirmPremintItemsUploadedAction ---

export interface IConfirmPremintItemsUploadedActionRequestDto {
  /**
   * The requiestId this confirmation refers to
   */
  requestId: string;
}

/**
 * DTO for confirming that items have been succesfully uploaded
 */
@JsonObject()
export class ConfirmPremintItemsUploadedActionRequestDto
  extends CustomActionRequestDTO
  implements IConfirmPremintItemsUploadedActionRequestDto
{
  @JsonProperty({ required: true })
  requestId: string;
}

export interface IConfirmPremintItemsUploadedActionResponseDto {}

@JsonObject()
export class ConfirmPremintItemsUploadedActionResponseDto
  extends CustomActionResponseDTO
  implements IConfirmPremintItemsUploadedActionResponseDto {}

// --- ConfirmNftMinted ---

export interface IConfirmNftMintedActionRequestDto {
  /**
   * Id of the current request.
   * It shoukd be the same returned by the "confirm-premint-item-uploaded" action.
   */
  requestId: string;
}

@JsonObject()
export class ConfirmNftMintedActionRequestDto
  extends CustomActionRequestDTO
  implements IConfirmNftMintedActionRequestDto
{
  @JsonProperty({ required: true })
  requestId: string;
}

export interface IConfirmNftMintedActionResponseDto {
  nftId: number;

  imageUrl: string;

  metadataUrl: string;
}

@JsonObject()
export class ConfirmNftMintedActionResponseDto
  extends CustomActionResponseDTO
  implements IConfirmNftMintedActionResponseDto
{
  @JsonProperty({ required: true })
  nftId: number;

  @JsonProperty({ required: false })
  imageUrl: string;

  @JsonProperty({ required: false })
  metadataUrl: string;
}

// --- RegisterPostmintUpload ---

/**
 * Request DTO model for UploadRenderer's action "register-postmint-upload".
 */
interface IRegisterPostmintUploadRequestDto {}

@JsonObject()
export class RegisterPostmintUploadRequestDto
  extends CustomActionRequestDTO
  implements IRegisterPostmintUploadRequestDto {}

/**
 * Response DTO model for custom UploadRenderer's action "register-postmint-upload"
 */
export interface IRegisterPostmintUploadRepsonseDto {
  /**
   * Pre-signed url for upoading metadata file
   */
  uploadMetadataUrl: string;

  /**
   * Pre-signed url for upoading image file
   */
  uploadImageUrl: string;
}

@JsonObject()
export class RegisterPostmintUploadRepsonseDto
  extends CustomActionResponseDTO
  implements IRegisterPostmintUploadRepsonseDto
{
  @JsonProperty({ required: true })
  uploadMetadataUrl: string;

  /**
   * Pre-signed url for upoading image file
   */
  @JsonProperty({ required: true })
  uploadImageUrl: string;
}

// --- ConfirmPostmintItemsUploaded ---

/**
 * Request DTO model for UploadRenderer's action "confirm-postmint-items-uploaded".
 */
export interface IConfirmPostmintItemsUploadedRequestDto {}

@JsonObject()
export class ConfirmPostmintItemsUploadedRequestDto
  extends CustomActionRequestDTO
  implements IConfirmPostmintItemsUploadedRequestDto {}

/**
 * Response DTO model for custom UploadRenderer's action "confirm-postmint-items-uploaded"
 */
export interface IConfirmPostmintItemsUploadedRepsonseDto {
  /**
   * Pre-signed url for upoading metadata file
   */
  uploadMetadataUrl: string;

  /**
   * Pre-signed url for upoading image file
   */
  uploadImageUrl: string;
}

@JsonObject()
export class ConfirmPostmintItemsUploadedRepsonseDto
  extends CustomActionResponseDTO
  implements IConfirmPostmintItemsUploadedRepsonseDto
{
  /**
   * Pre-signed url for upoading metadata file
   */
  @JsonProperty({ required: true })
  uploadMetadataUrl: string;

  /**
   * Pre-signed url for upoading image file
   */
  @JsonProperty({ required: true })
  uploadImageUrl: string;
}
