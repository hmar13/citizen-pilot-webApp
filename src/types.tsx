export type report = {
  category: string;
  description: string;
  latitude: number;
  longitude: number;
  urgency: boolean;
  image: string;
  Fname: string;
  Lname: string;
  email: string;
};

export type proposal = {
  title: string;
  description: string;
  location: string;
  image: string;
  votes: number;
  approved: boolean;
  userId: number;
};
