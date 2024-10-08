export const userState: { [key: number]: string } = {};

// Portal input data
export interface PortalDataInput {
  link: string;
  media: string;
  text: string;
  channelId: number;
  buttonData?: {
    verifyButton: string;
    customButtons: ButtonData[];
  };
}

export const portalDataInput: { [key: number]: PortalDataInput } = {};
export function updatePortalDataInput<K extends keyof PortalDataInput>(
  chatId: number,
  key: K,
  value: PortalDataInput[K]
) {
  portalDataInput[chatId] = { ...portalDataInput[chatId], [key]: value };
}

// Buttons input data
export interface ButtonData {
  text: string;
  link: string;
}

export const buttonStateData: { [key: number]: ButtonData[] } = {};
export const verifyButtonStateData: { [key: number]: string } = {};

// Messages to delete
export const messagesToDelete: { [key: number]: number[] } = {};
