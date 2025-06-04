  export interface Product {
    id: number;
    name: string;
    created_at: string;
    price: number;
    description: string;
    slug: string;
    main_image: string;
    images: string[] | null;
    rate_count: number;
    rate_value: number;
    attributes: Attribute[];
    product_attributes: ProductAttribute[];
  }

  export interface Attribute {
    id: number;
    type: 'color' | 'size';
    value: string;
  }

  export interface ProductAttribute {
    id: number;
    price: number;
    attribute_ids: number[];
  }