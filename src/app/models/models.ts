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

export class Ruta{
  id: number;
  image: string;
  created: Date;
  modified: Date;
  is_removed: boolean;
  name: string;
  duration: String;
  region: string;
  entry_date: Date;
  category: number;
  duration_days: number;
  organization: number;
}

export class Category{
  id:number;
  image: string;
  name: string;
  category_parent: any;
}


