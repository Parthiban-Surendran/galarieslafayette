// services/categoryService.js
import axios from "axios";

const BASE_URL = "http://192.168.1.92:3000";

export const fetchParentCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories?isParent=true`);
  return response.data;
};

export const fetchParentProducts = async (categoryId) => {

    const response = await axios.get(`${BASE_URL}/products/by-parent-category?parentCategoryId=${categoryId}`);
    return response.data;
  };

export const fetchChildCategories = async (childIds) => {
  const idsParam = childIds.join(",");
  const response = await axios.get(`${BASE_URL}/categories?ids=${idsParam}`);
  return response.data;
};

export const fetchProductsByCategory = async (categoryId) => {
  const response = await axios.get(`${BASE_URL}/products?categoryId=${categoryId}`);
  return response.data;
};



export const fetchTop = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/top-products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch products');
  }
};

export const fetchAll = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/all-products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch products');
  }
};
export const fetchFavourites = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/favourites/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch favourites");
  }
};

export const postFavourites = async (item, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/favourites`, {
      productId: item.productId,
      userId: userId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to add to favourites");
  }
};

export const deleteFavourites = async (item, userId) => {
  try {
    console.log(item)
    const response = await axios.delete(`${BASE_URL}/favourites`, {
      data: {
        productId: item,
        userId: userId,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to remove from favourites");
  }
};

export const deleteAllFavourites = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteFavourites`, {
      data: {
        userId: userId
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to remove from favourites");
  }
};

// 🛒 CART API SERVICES

// Add item to cart
export const addToCart = async (item, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/products/cart/add`, {
      productId: item.productId,
      userId: userId,
      quantity: item.quantity || 1,
    });
    return response.data;
  } catch (error) {
    console.error("Add to cart error:", error);
    throw new Error("Unable to add item to cart");
  }
};

// Get user's cart
export const fetchCart = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Fetch cart error:", error);
    throw new Error("Unable to fetch cart");
  }
};

// Update quantity of a cart item
export const updateCartQuantity = async (productId, userId, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/cart/update`, {
      productId,
      userId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Update cart error:", error);
    throw new Error("Unable to update cart");
  }
};

// Remove item from cart
export const removeFromCart = async (productId, userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/cart/remove`, {
      data: {
        productId,
        userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Remove cart item error:", error);
    throw new Error("Unable to remove item from cart");
  }
};

// Clear all cart items for a user (optional)
export const clearCart = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/cart/clear`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Clear cart error:", error);
    throw new Error("Unable to clear cart");
  }
};


// ... [CART SERVICES CONTINUE ABOVE]

// 📦 ORDER APIs

// Create a new order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error("Place order error:", error);
    throw new Error("Unable to place order");
  }
};

// Fetch all orders for a user
export const fetchOrdersByUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/orders`);
    return response.data.orders;
  } catch (error) {
    console.error("Fetch orders error:", error);
    throw new Error("Unable to fetch orders");
  }
};

// Fetch a specific order by its ID
export const fetchOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Fetch order error:", error);
    throw new Error("Unable to fetch order");
  }
};

// 🧾 ORDER ITEM APIs

// Fetch all order items for a specific order
export const fetchOrderItems = async (orderId) => {
  try {
    console.log("ID",orderId)
    const response = await axios.get(`${BASE_URL}/products/order/${orderId}`);
    console.log(response.data)
    return response.data.order;
  } catch (error) {
    console.error("Fetch order items error:", error);
    throw new Error("Unable to fetch order items");
  }
};

// Optionally: Add individual order item (if needed)
export const addOrderItem = async (orderItemData) => {
  try {
    const response = await axios.post(`${BASE_URL}/order-items`, orderItemData);
    return response.data;
  } catch (error) {
    console.error("Add order item error:", error);
    throw new Error("Unable to add order item");
  }
};






