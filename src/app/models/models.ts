import { Title, SafeResourceUrl } from "@angular/platform-browser";

export class Category {
  id: number;
  image: string;
  image_banner: string;
  name: string;
  category_parent: any;
  status: boolean;
}

export class subCategory {
  id: number;
  name: string;
  category_parent: any;
  image: string;
  date: Date;
  type: string;
  status: boolean;
}

export class Region{
  code: string;
  name: string;
  status: boolean;
}

export class Duracion{
  id: number;
  name: string;
  status: boolean;
}

export class Ubicaciones {
  ruta:rutaMapa;
}
export class rutaMapa{
  latitude: string;
  longitude: string;
}




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
  name:  string;
  description:  string;
  duration:Date;
  region:  string;
  entry_date:Date;
  category: number;
  web_site: string;
  duration_days: number;
  organization: number;
  route_item:RutaItem[];
  text_button: string;
  url_button: string;
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
  label: string;
  draggable: boolean;
  entry_date: String;
  route:number;
  title: String;
  route_item_detail:ItemDetail[];
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
  video_url:string;
  videoSafeURL:SafeResourceUrl;
}

/*

"route_item_detail": [
  {
      "id": 24,
      "image": "http://yagan.dev21.cl//media/images/2018/06/orig/2943-bahia-inglesa-matias-daza.jpg",
      "created": "2018-06-04T21:25:02.279327-04:00",
      "modified": "2018-06-04T21:25:02.290539-04:00",
      "is_removed": false,
      "name": "playa",
      "description": "",
      "route_item": 6
  }
],
    
*/
/*
export class Marker {
  id: Number;
  created: Date;
  modified: Date;
  description: String;
  latitude: any;
  longitude: any;
  label: string;
  draggable: boolean;
  entry_date: String;
}/**/
/**/
export class Marker {
  latitude: any;
  longitude: any;
  label: string;
  draggable: boolean;
  icon: String;
  title: String;
}

export class ItemMarker {
  latitude: any;
  longitude: any;
  label: string;
  draggable: boolean;
  icon: String;
  title: String;
}



