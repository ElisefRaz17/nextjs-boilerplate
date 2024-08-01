import { User } from "firebase/auth";

export interface UserProps {
  accessToken: string | any;
  auth: any;
  displayName: string;
  email: string | any;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: any;
  phoneNumber: any;
  photoURL: string | any;
  proactiveRefresh: any;
  providerData: any;
  providerId: string | any;
  reloadListener: any | null;
  reloadUserInfo: any;
  tenantId: any | null;
  uid: string;
}

export interface AspirationCardProps {
  name: string;
  aspirationId:number;
  role: string;
  image_path:string;
  description:string;
  website:string;
  user:UserProps;
}

export interface AspirationThunkProp {
  id:number;
  role:string;
  name:string;
  image_path:string;
  description:string;
  userId:User|undefined;
  website:string;
}


