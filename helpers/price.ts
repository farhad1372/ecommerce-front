import { Product } from "@/types/product";


export const priceSeparator = (price: number) => {
    const [intPart, decimalPart] = Number(price || 0)
        .toFixed(2)
        .split(".");
    return [intPart, decimalPart];
}

export const getProductPrice = (product: Product, attr1: number, attr2: number): number => {
    for (const combo of product.product_attributes) {
        const ids = combo.attribute_ids;
        if (ids.includes(attr1) && ids.includes(attr2)) {
            return combo.price;
        }
    }

    return product.price;
}