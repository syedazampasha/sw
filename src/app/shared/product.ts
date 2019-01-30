import { Comment } from './comment';

export class Product {
    id: string;
    featured: boolean;
    name: string;
    code: string;
    category: string;
    tag: string;
    qty: string;
    price: string;
    size: string;
    image: string;
    outofstock: string;
    note: string;
    material: string;
    color: string;
    care: string;
    description: string;
    fitType: string;
    sleeves: string;
    unique: string;
    quality: string;
    comments: Comment[];
}