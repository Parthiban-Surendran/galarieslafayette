// // hooks/useCategoryManager.js
// import { useState, useEffect } from "react";
// import {
//   fetchParentCategories,
//   fetchAll,
//   fetchTop,
//   fetchChildCategories,
//   fetchProductsByCategory,
//   fetchParentProducts,
// } from "../services/categoryService";

// import {
//   fetchFavourites,
//   postFavourites,
//   deleteFavourites,
// } from "../services/categoryService"; // assuming you moved them to this file

// export default function useCategoryManager(navigation, closeDrawer) {

//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [favourites, setFavourites] = useState([]);
//   const [banner, setBanner] = useState([]);
//   useEffect(() => {
//     fetchCategories();
    
//       loadFavourites(1);
    
//   }, []);

//   const fetchCategories = async (parentCategory = null) => {
//     try {
//       if (!parentCategory) {
//         setLoading(true);
//         const data = await fetchParentCategories();
//         setCategories(data);
//         setProducts([]);
//       } else {
//         if (parentCategory.childIds?.length > 0) {
//           setLoading(true);
//           const data = await fetchChildCategories(parentCategory.childIds);
//           setCategories(data);
//           setProducts([]);
//         } else {
//           const prodData = await fetchProductsByCategory(
//             parentCategory.categoryId
//           );
//           setProducts(prodData);
//           setCategories([]);
//           fetchCategories(null);

//           closeDrawer?.(); // make sure this is defined
//           setHistory([]);
//           navigation.navigate("Dashboard", { products: prodData });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchParentCategoryProducts = async (categoryId) => {
//     const data = await fetchParentProducts(categoryId);
//     return data;
//   };

//   const fetchTopProducts = async () => {
//     const data = await fetchTop();
//     return data;
//   };

//   const fetchAllProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetchAll();
//       setAllProducts(response);
//     } catch (error) {
//       console.error("Error fetching all products:", error);
//       Alert.alert("Error", "Failed to load all products.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setHistory([...history, selectedCategory]);
//     setSelectedCategory(category);
//     fetchCategories(category);
//   };

//   const goBack = () => {
//     const prev = history.pop();
//     setHistory([...history]);
//     setSelectedCategory(prev);
//     fetchCategories(prev);
//   };

//   // 🔥 FAVOURITES FUNCTIONS 🔥

//   const loadFavourites = async (userId) => {
//     try {
//       const data = await fetchFavourites(userId);
//       setFavourites(data);
//     } catch (error) {
//       console.error("Failed to fetch favourites:", error);
//     }
//   };

//   const addFavourite = async () => {
//     try {
//       const result = await postFavourites();
//       await loadFavourites(userId);
//       return result;
//     } catch (error) {
//       console.error("Failed to add favourite:", error);
//     }
//   };

//   const removeFavourite = async () => {
//     try {
//       const result = await deleteFavourites();
//       await loadFavourites(1);
//       return result;
//     } catch (error) {
//       console.error("Failed to delete favourite:", error);
//     }
//   };


//   const fetchBannerProducts = async (categoryId) => {
//     console.log(categoryId)
//     const data = await fetchProductsByCategory(categoryId);
//     console.log("DAta",data)
//     setBanner(data);
//     return data;
//   };

//   return {
//     categories,
//     products,
//     loading,
//     selectedCategory,
//     history,
//     handleCategoryClick,
//     fetchParentCategoryProducts,
//     fetchTopProducts,
//     fetchAllProducts,
//     allProducts,
//     isLoading,
//     goBack,
//     fetchBannerProducts,
//     banner,
//     // favourites related
//     favourites,
//     loadFavourites,
//     addFavourite,
//     removeFavourite,
//   };
// }



import { useState, useEffect } from "react";
import {
  fetchParentCategories,
  fetchAll,
  fetchTop,
  fetchChildCategories,
  fetchProductsByCategory,
  fetchParentProducts,
  fetchFavourites,
  postFavourites,
  deleteFavourites,
  deleteAllFavourites,
  addToCart,
  fetchCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,

  placeOrder,
  // fetchOrders,
  fetchOrderItems,
  fetchOrdersByUser
} from "../services/categoryService";

export default function useCategoryManager(navigation, closeDrawer) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [history, setHistory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [banner, setBanner] = useState([]);
  const [isBannerLoading, setIsBannerLoading] = useState(false); // Optional: banner-specific loader
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cartBadge,setCartBadge] = useState(0);

  const [orders, setOrders] = useState([]);
const [orderItems, setOrderItems] = useState([]);
const [isOrderLoading, setIsOrderLoading] = useState(false);

  
  useEffect(() => {
    fetchCategories();
    loadFavourites(1); // You can make userId dynamic later
  }, []);

  const fetchCategories = async (parentCategory = null) => {
    try {
      setLoading(true);
      if (!parentCategory) {
        const data = await fetchParentCategories();
        setCategories(data);
        setProducts([]);
      } else {
        if (parentCategory.childIds?.length > 0) {
          const data = await fetchChildCategories(parentCategory.childIds);
          setCategories(data);
          setProducts([]);
        } else {
          const prodData = await fetchProductsByCategory(parentCategory.categoryId);
          setProducts(prodData);
          setCategories([]);
          fetchCategories(null);

          closeDrawer?.();
          setHistory([]);
          navigation.navigate('Dashboard', {
            screen: 'DashboardMain',
            params: { products: prodData }
          });          }
      }
    } catch (err) {
      console.error("Error fetching categories or products:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchParentCategoryProducts = async (categoryId) => {
    try {
      return await fetchParentProducts(categoryId);
    } catch (err) {
      console.error("Error fetching parent category products:", err);
    }
  };

  const fetchTopProducts = async () => {
    try {
      return await fetchTop();
    } catch (err) {
      console.error("Error fetching top products:", err);
    }
  };

  const fetchAllProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetchAll();
      setAllProducts(response);
    } catch (error) {
      console.error("Error fetching all products:", error);
      Alert.alert("Error", "Failed to load all products.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setHistory([...history, selectedCategory]);
    setSelectedCategory(category);
    fetchCategories(category);
  };

  const goBack = () => {
    const prev = history.pop();
    setHistory([...history]);
    setSelectedCategory(prev);
    fetchCategories(prev);
  };


  const loadFavourites = async (userId) => {
    try {
      const data = await fetchFavourites(userId);
      setFavourites(data);
    } catch (error) {
      console.error("Failed to fetch favourites:", error);
    }
  };

  const addFavourite = async () => {
    try {
      const result = await postFavourites();
      await loadFavourites(1); // Replace with dynamic userId if needed
      return result;
    } catch (error) {
      console.error("Failed to add favourite:", error);
    }
  };

  const removeFavourite = async (productId) => {
    try {
      console.log(productId)
      const result = await deleteFavourites(productId,1);
      await loadFavourites(1); 
      return result;
    } catch (error) {
      console.error("Failed to delete favourite:", error);
    }
  };
  const removeAllFavourite = async () => {
    try {
      const result = await deleteAllFavourites(1);
      await loadFavourites(1); // Replace with dynamic userId if needed
      return result;
    } catch (error) {
      console.error("Failed to delete favourite:", error);
    }
  };

  const fetchBannerProducts = async (categoryId) => {
    try {
      setIsBannerLoading(true);
      const data = await fetchParentProducts(categoryId);
      setBanner(data);
      return data;
    } catch (error) {
      console.error("Error fetching banner products:", error);
      return [];
    } finally {
      setIsBannerLoading(false);
    }
  };

  const loadCart = async (userId = 1) => {
    try {
      setIsCartLoading(true);
      const data = await fetchCart(userId);
      setCartItems(data);
      setCartBadge(data.totalItems)
      console.log("DATA",data)
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setIsCartLoading(false);
    }
  };
  
  const addItemToCart = async (item, userId = 1) => {
    try {
      const result = await addToCart(item, userId);
      await loadCart(userId);
      return result;
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };
  
  const updateItemQuantity = async (productId, quantity, userId = 1) => {
    try {
      const result = await updateCartQuantity(productId, userId, quantity);
      await loadCart(userId);
      return result;
    } catch (error) {
      console.error("Failed to update item quantity:", error);
    }
  };
  
  const removeItemFromCart = async (productId, userId = 1) => {
    try {
      const result = await removeFromCart(productId, userId);
      await loadCart(userId);
      return result;
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };
  
  const clearUserCart = async (userId = 1) => {
    try {
      const result = await clearCart(userId);
      await loadCart(userId);
      return result;
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };


  const loadOrders = async (userId = 1) => {
    try {
      setIsOrderLoading(true);
      const data = await fetchOrdersByUser(userId);
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setIsOrderLoading(false);
    }
  };
  
  const loadOrderItems = async (orderId) => {
    try {
      const data = await fetchOrderItems(orderId);
      setOrderItems(data);
    } catch (error) {
      console.error("Failed to fetch order items:", error);
    }
  };
  
  const submitOrder = async (orderDetails) => {
    try {
      const result = await placeOrder(orderDetails);
      await loadOrders(orderDetails.userId);
      return result;
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };
  
  

  
  return {
    categories,
    products,
    loading,
    selectedCategory,
    history,
    handleCategoryClick,
    fetchParentCategoryProducts,
    fetchTopProducts,
    fetchAllProducts,
    allProducts,
    isLoading,
    goBack,
    fetchBannerProducts,
    banner,
    isBannerLoading,
    // favourites related
    favourites,
    loadFavourites,
    addFavourite,
    removeFavourite,
    removeAllFavourite,

    
  cartItems,
  isCartLoading,
  loadCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearUserCart,


  orders,
  orderItems,
  isOrderLoading,
  loadOrders,
  loadOrderItems,
  submitOrder,

  cartBadge

  };
}
