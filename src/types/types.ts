interface ChatSender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: ChatSender;
  time: string;
}

export interface ChatMetadataFirstTime {
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}
