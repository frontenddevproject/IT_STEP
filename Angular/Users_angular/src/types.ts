export interface UserInterface {
   id:number;
   name: string;
   username: string;
   email: string;
   phone: string;
   website: string;
   address: AddressInterface;
   geo: GeoInterface;
   company: CompanyInterface;
}

export interface AddressInterface {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
}

export interface GeoInterface {
   lat: number;
   lng: number;
}

export interface CompanyInterface {
   name: string;
   catchPhrase: string;
   bs: string;
}
export type UserWithoutFieldsInterface = Omit< UserInterface,"company" | "geo" | "address" | "id" >;
export type ignoredField =  string[];
