export interface TUser {
  id?: string;
  email?: string;
  fullname?: string;
  username?: string;
  bio?: string;
  phone?: string;
  address?: string;
  state?: string;
  lga?: string;
  created_at?: number;
  updated_at?: number;
  roles?: string[];
  levels?: string[];
}
