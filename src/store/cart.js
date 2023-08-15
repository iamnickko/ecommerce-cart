import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      product: {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      quantity: 1,
    },
    {
      product: {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description:
          "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/8/1.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        ],
      },
      quantity: 1,
    },
  ],
  totalAmount: 2048,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        state.totalAmount = state.totalAmount + action.payload.product.price;
      } else {
        state.items.push(action.payload);
        state.totalAmount = state.totalAmount + action.payload.product.price;
      }
    },
    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      const existingItem = state.items[existingItemIndex];

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.product.id
        );
        state.totalAmount = state.totalAmount - action.payload.product.price;
      } else {
        existingItem.quantity--;
        state.totalAmount = state.totalAmount - action.payload.product.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
