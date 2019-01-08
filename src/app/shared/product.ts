import { Comment } from './comment';

export class Product {
    id: string;
    featured: boolean; //product avaiable / not available
    name: string;
    category: string;
    tag: string;
    qty: string;
    price: string;
    image: string;
    outofstock: string;
    note: string;
    material: string;
    care: string;
    description: string;
    comments: Comment[];
}