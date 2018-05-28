export class Experience{
  id: number;
  created: Date;
  modified: string;
  is_removed: boolean;
  title: string;
  description: string;
  web_site: string;
  region: string;
  latitude: string;
  longitude: string;
  address: string;
  image: string;
  category: number;
  organization: number;
}


export class Category{
  name: string;
  category_parent: null;
  image: string;
}


