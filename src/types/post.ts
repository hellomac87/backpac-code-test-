export type Post = {
    id: string;
    image: string;
    name: string;
    title: string;
    priceInfo?: {
        origin: number;
        priceSale?: number;
        saleRate?: number;
    };
    rate?: 1 | 2 | 3 | 4 | 5;
    comment?: string;
};
