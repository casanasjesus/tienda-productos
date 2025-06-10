type Rating = {
  count: number;
  rate: number;
};

export type Producto = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
