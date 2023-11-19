
import './commands';

export interface PersonDetails {
    "SSN": number,
    "firstName": string
    "address": string
}

interface RootObject {
    users: User[];
    products: Product[];
    orders: Order[];
}

interface Order {
    id: number;
    user_id: number;
    products: Product2[];
}

interface Product2 {
    product_id: number;
    quantity: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
    categories: string[];
}

interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone_numbers: Phonenumber[];
}



export namespace Interfaces {
    interface Phonenumber {
        type: string;
        number: string;
    }
    
    interface Address {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}
