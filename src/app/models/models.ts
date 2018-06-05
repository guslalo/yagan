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

export class RutaItem{
  id: Number;
  image: any;
  created: Date;
  modified: Date;
  is_removed: Boolean;
  description: String;
  latitude: String;
  longitude: String;
  entry_date: String;
  route:number
}

export class Category{
  id:number;
  image: string;
  name: string;
  category_parent: any;
}

export class Marker {
	latitude: number;
	longitude: number;
	label?: string;
	draggable: boolean;
}

export class ItemDetail {
  id: number;
  image: string;
  created:Date;
  modified:Date;
  is_removed: boolean;
  name: string;
  description: string;
  route_item: number;
}

