import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { CustomActionRequestDTO, CustomActionResponseDTO } from "../../models";

export enum UploadRendererCustomActionNames {
  RegisterPremintUpload = "register-premint-upload-request",
  ConfirmPremintItemsUploaded = "confirm-premint-items-uploaded",
  ConfirmItemsMinted = "confirm-items-minted",
  RegisterPostmintUpload = "register-postmint-upload",
  ConfirmPostmintItemsUploaded = "confirm-postmint-items-uploaded",
}

/**
 * DTO for registering request (for uploading items)
 */
@JsonObject()
export class RegisterPremintUploadRequestDto extends CustomActionRequestDTO {}

/**
 * Response containing urls for uploading files
 */
@JsonObject()
export class RegisterPremintUploadResponseDto extends CustomActionResponseDTO {
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

  /**
   * RequestId to be used for confirming items uploaded, and also for pairing mint operation
   */
  @JsonProperty({ required: true })
  requestId: string;
}

/**
 * DTO for confirming that items have been succesfully uploaded
 */
@JsonObject()
export class ConfirmPremintItemsUploadedActionRequestDto extends CustomActionRequestDTO {
  /**
   * The requiestId this confirmation refers to
   */
  @JsonProperty({ required: true })
  requestId: string;
}

@JsonObject()
export class ConfirmPremintItemsUploadedActionResponseDto extends CustomActionResponseDTO {}

@JsonObject()
export class ConfirmNftMintedActionRequestDto extends CustomActionRequestDTO {
  /**
   * Id of the current request.
   * It shoukd be the same returned by the "confirm-premint-item-uploaded" action.
   */
  @JsonProperty({ required: true })
  requestId: string;
}

@JsonObject()
export class ConfirmNftMintedActionResponseDto extends CustomActionResponseDTO {
  @JsonProperty({ required: true })
  nftId: number;

  @JsonProperty({ required: false })
  imageUrl: string;

  @JsonProperty({ required: false })
  metadataUrl: string;
}

/**
 * Request DTO model for UploadRenderer's action "register-postmint-upload".
 */
@JsonObject()
export class RegisterPostmintUploadRequestDto extends CustomActionRequestDTO {}

/**
 * Response DTO model for custom UploadRenderer's action "register-postmint-upload"
 */
@JsonObject()
export class RegisterPostmintUploadRepsonseDto extends CustomActionResponseDTO {
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

/**
 * Request DTO model for UploadRenderer's action "confirm-postmint-items-uploaded".
 */
@JsonObject()
export class ConfirmPostmintItemsUploadedRequestDto extends CustomActionRequestDTO {}

/**
 * Response DTO model for custom UploadRenderer's action "confirm-postmint-items-uploaded"
 */
@JsonObject()
export class ConfirmPostmintItemsUploadedRepsonseDto extends CustomActionResponseDTO {
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
