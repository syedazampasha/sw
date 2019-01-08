import { Product } from './product';

export const PRODUCTS: Product[] = [
    {
        id: '0',
        featured: true,
        name: 'shirt',
        category: 'Mens',
        tag: 't-shirt',
        qty: '5',
        price: 'Rs. 600',
        image: '/assets/images/products/shirts/S-01.jpg',
        outofstock: 'if no stock',
        note: 'The design of the Cotton Kalamkari print may differ from the design shown in the photos',
        material: 'shirt material',
        care: 'Gently clean with dry/moist cloth',
        description: '123 A unique combination of Indian Uthappam (pancake) and Italian pizza.',
        comments: [
            {
                rating: 5,
                comment: '01 Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        featured: true,
        name: 'shirt new',
        category: 'Mens',
        tag: 't-shirt',
        qty: '4',
        price: 'Rs. 800',
        image: '/assets/images/products/shirts/S-02.jpg',
        outofstock: 'if no stock',
        note: 'The design of the Cotton Kalamkari print may differ from the design shown in the photos',
        material: 'shirt material',
        care: 'Gently clean with dry/moist cloth',
        description: '123 A unique combination of Indian Uthappam (pancake) and Italian pizza.',
        comments: [
            {
                rating: 5,
                comment: '01 Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        featured: true,
        name: 'shirt new 3',
        category: 'Mens',
        tag: 't-shirt',
        qty: '4',
        price: 'Rs. 800',
        image: '/assets/images/products/shirts/S-03.jpg',
        outofstock: 'if no stock',
        note: 'The design of the Cotton Kalamkari print may differ from the design shown in the photos',
        material: 'shirt material',
        care: 'Gently clean with dry/moist cloth',
        description: '123 A unique combination of Indian Uthappam (pancake) and Italian pizza.',
        comments: [
            {
                rating: 5,
                comment: '01 Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            }
        ]
    }
]