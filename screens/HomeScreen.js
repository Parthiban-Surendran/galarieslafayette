// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, FlatList, Text, Image,TouchableOpacity } from 'react-native';
// import ProductCard from '../components/ProductCard';
// import SearchBar from '../components/SearchBar';
// import Header from '../components/Header';
// import TopLineText from '../components/TopLineText';
// import BackgroundBanner from '../components/BackgroundBanner';

// // import imageWomen from "../assets/categoriesimg.png";
// // import imageMen from "../assets/categoriesimg1.png";
// // import imageChild from "../assets/categoriesimg2.png";
// // import imageBeauty from "../assets/categoriesimg3.png";
// // import imageHome from "../assets/categoriesimg4.png";
// // import imageLuxe from "../assets/categoriesimg5.png";
// import banner1 from '../assets/banner1.png';
// import banner2 from '../assets/banner2.png';
// import banner3 from '../assets/banner3.png';
// import banner4 from '../assets/banner4.png';
// import banner5 from '../assets/banner5.png';
// import card2 from '../assets/card2.png';
// import productimg from '../assets/productimg.png';
// import CardProduct from '../components/CardProduct';
// import card3 from '../assets/card3.png';
// import BottomComp from '../components/BottomComp';
// import { getCategories, getProducts, getProductsByCategory } from '../services/api';
// import CategoryComponent from '../components/CategoryComponent';


// // const categoryImages = {
// //     Women: imageWomen,
// //     Men: imageMen,
// //     Child: imageChild,
// //     Beauty: imageBeauty,
// //     Home: imageHome,
// //     Luxe: imageLuxe,
// //   };

// const HomeScreen = ({ navigation }) => {

    
//     const [products, setProducts] = useState([]);
//     const categoriess = [
//         "Women's bags", "Women's wallets", "Robes", "Evening dresses", "Women's jumpsuits",
//         "Women's shirts", "Women's sweaters", "Women's sweatshirts", "Women's pants", "Women's jeans",
//         "Women's jewelry", "Women's watches", "Bracelets femme", "Women's coats", "Women's down jackets",
//         "Women's jackets", "Women's shoes", "Women's ankle boots and boots", "Women's sneakers",
//         "Men's bags", "Men's sweaters", "Men's sweatshirts", "T-shirts homme", "Men's suits",
//         "Men's shirts", "Men's pants", "Men's jeans", "Women's vest", "Men's jewelry",
//         "Men's watches", "Bracelets homme", "Men's coats", "Men's down jackets", "Men's jackets",
//         "Men's shoes", "Men's ankle boots and boots", "Men's sneakers", "Men's loafers",
//         "Woman's Site Map", "Man sitemap", "Beauty Sitemap", "Home site plan",
//         "Child sitemap", "Sitemap Brands"
//       ];
      

//     const [searchTerm, setSearchTerm] = useState('');


//     const handleSearch = (text) => {
//         setSearchTerm(text);
//     };

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const renderProduct = ({ item }) => <ProductCard product={item} onPress={()=>{navigation.navigate('Product')}} />;
//     const renderCardProduct = ({ item }) => <CardProduct product={item} />;

//     useEffect(()=>{
//         const fetchProducts = async () => {
//                         console.log("entered")
//                         try {
//                           const data = await getProducts();
//                           const temp = {};
//                           setProducts(data);
//                           console.log("products",products)
//                         } catch (error) {
//                           console.log(error.message);
//                         }
//                     };
//                     fetchProducts();
//                 },[]);

//     return (
//         <View style={styles.container}>
//             <View style={{height:800,backgroundColor:'#fff'}}>
//             <FlatList
//                 ListHeaderComponent={
//                     <>
//                         <TopLineText />
//                         <Header />
//                         <View style={{padding:10}}>
//                             <SearchBar onSearch={handleSearch} />

//                         </View>
                        
//                         {/* Categories Section */}
//                         <View style={styles.categoriesContainer}>
//                             <Text style={styles.sectionTitle}>Categories</Text>
//                             <CategoryComponent/>
//                         </View>

//                         {/* Banners */}
//                         <BackgroundBanner
//                             imageSource={banner2}
//                             heading="Welcome to Our Store"
//                             subheading="Discover the latest trends"
//                             buttonText="Shop Now"
//                             onPress={() => console.log('Button Pressed')}
//                         />

//                         <BackgroundBanner
//                             imageSource={banner1}
//                             heading="Exclusive Offers"
//                             subheading="Grab the best deals now"
//                             buttonText="Shop Now"
//                             onPress={() => console.log('Button Pressed')}
//                         />

//                         {/* Latest Products */}
//                         <Text style={styles.sectionTitle}>Latest Products</Text>
//                     </>
//                 }
//                 data={filteredProducts}
//                 renderItem={renderProduct}
//                 keyExtractor={item => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.productListContent}
//                 ListFooterComponent={
//                     <>
//                         {/* See More Section */}
//                         <View style={{backgroundColor:'#FFFFFF'}} >
//                             <View style={styles.seemore}>
//                                 <Text style={styles.seemoreText}>See More Articles</Text>
//                             </View>

//                             {/* Repeated Banners */}
                            

//                             <BackgroundBanner
//                                 imageSource={banner3}
//                                 heading="Best Sellers"
//                                 subheading="Shop the most popular products"
//                                 buttonText="View More"
//                                 onPress={() => console.log('Button Pressed')}
//                             />

//                             {/* Repeated Products */}
//                             <Text style={styles.sectionTitle}>More Products</Text>
//                             <FlatList
//                                 data={filteredProducts}
//                                 renderItem={renderProduct}
//                                 keyExtractor={item => item.id}
//                                 numColumns={2}
//                                 contentContainerStyle={styles.productListContent}
//                             />
//                             <View style={styles.seemore}>
//                                 <Text style={styles.seemoreText}>See More Articles</Text>
//                             </View>



//                             {/* Repeated Banners */}
                            

//                             <BackgroundBanner
//                                 imageSource={banner4}
//                                 heading="Best Sellers"
//                                 subheading="Shop the most popular products"
//                                 buttonText="View More"
//                                 onPress={() => console.log('Button Pressed')}
//                             />

//                             {/* Repeated Products */}
//                             <Text style={styles.sectionTitle}>More Products</Text>
//                             <FlatList
//                                 data={filteredProducts}
//                                 renderItem={renderProduct}
//                                 keyExtractor={item => item.id}
//                                 numColumns={2}
//                                 contentContainerStyle={styles.productListContent}
//                             />
//                             <View style={styles.seemore}>
//                                 <Text style={styles.seemoreText}>See More Articles</Text>
//                             </View>

//                             <BackgroundBanner
//                                 imageSource={banner5}
//                                 heading="Best Sellers"
//                                 subheading="Shop the most popular products"
//                                 buttonText="View More"
//                                 onPress={() => console.log('Button Pressed')}
//                             />

//                             <BackgroundBanner
//                                 videoSource={require('../assets/backgroundvid.mp4')}  // Provide video source
//                                 imageSource={null}         // Set null to show the video
//                                 heading="Best Sellers"
//                                 subheading="Shop the most popular products"
//                                 buttonText="View More"
//                                 onPress={() => console.log('Button Pressed')}
//                             />

//                             {/* Repeated Products */}
//                             <Text style={styles.sectionTitle}>More Products</Text>
//                             <FlatList
//                                 data={filteredProducts}
//                                 renderItem={renderProduct}
//                                 keyExtractor={item => item.id}
//                                 numColumns={2}
//                                 contentContainerStyle={styles.productListContent}
//                             />
//                             <Text style={styles.sectionTitle}>More Inspiration</Text>

//                             <FlatList
//                                 data={filteredProducts}
//                                 renderItem={renderProduct}
//                                 keyExtractor={item => item.id}
//                                 numColumns={2}
//                                 contentContainerStyle={styles.productListContent}
//                             />
//                             <View style={styles.carouselcont1}>
//                                 <Image source={card2}style={styles.carouselimg1}/>
//                                 <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Harness</Text>
//                                 <Text style={[styles.Heading1,{color:'black'},{marginLeft:20},{fontWeight:200},{fontSize:18}]}>The modern Software Delivery</Text>
//                             </View>
//                             <View style={styles.carouselcont1}>
//                                 <Image source={card2}style={styles.carouselimg1}/>
//                                 <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Harness</Text>
//                                 <Text style={[styles.Heading1,{color:'black'},{marginLeft:20},{fontWeight:200},{fontSize:18}]}>The modern Software Delivery</Text>
//                             </View>
//                             <View style={styles.carouselcont1}>
//                                 <Image source={card2}style={styles.carouselimg1}/>
//                                 <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Harness</Text>
//                                 <Text style={[styles.Heading1,{color:'black'},{marginLeft:20},{fontWeight:200},{fontSize:18}]}>The modern Software Delivery</Text>
//                             </View>
//                             <View style={styles.carouselcont1}>
//                                 <Image source={card2}style={styles.carouselimg1}/>
//                                 <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Harness</Text>
//                                 <Text style={[styles.Heading1,{color:'black'},{marginLeft:20},{fontWeight:200},{fontSize:18}]}>The modern Software Delivery</Text>
//                             </View>
//                             <BackgroundBanner
//                                 imageSource={card3}
//                                 heading="Best Sellers"
//                                 subheading="Shop the most popular products"
//                                 buttonText="View More"
//                                 onPress={() => console.log('Button Pressed')}
//                             />
//                             <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Our best selections</Text>
//                             <View style={styles.containers}>
//                                 <FlatList
//                                     data={categoriess}
//                                     keyExtractor={(item, index) => index.toString()}
//                                     numColumns={2} // Set 2 columns
//                                     columnWrapperStyle={styles.row} // Space between columns
//                                     renderItem={({ item }) => (
//                                     <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
//                                         <Text style={styles.text}>{item}</Text>
//                                     </TouchableOpacity>
//                                     )}
//                                 />
//                             </View>
//                         </View>
//                         <View style={{backgroundColor:'#000',marginTop:30,height:750}}>
//                             <BottomComp/>
//                         </View>
                        
//                     </>
//                 }
//             />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000000',
//     },
//     containers: {
//         flex: 1,
//         backgroundColor: '#f8f8f8',
//         padding: 20,
//         paddingTop: 40
//       },
//       item: {
//         flex: 1,
             
//         alignItems: 'left'
//       },
//       text: {
//         fontSize: 16,
//         color: '#333',
//       },
//     categoriesContainer: {
//         paddingHorizontal: 10,
//     },
//     seemore: {
//         height: 50,
//         width: '90%',
//         borderRadius: 30,
//         marginLeft: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: 'rgb(27, 23, 27)',
//         marginTop: 20,
//     },
//     row: {
//         justifyContent: 'space-between'
//       },
//     seemoreText: {
//         fontFamily: 'arial',
//         fontWeight: 'bold',
//         fontSize: 21,
//     },
//     sectionTitle: {
//         marginTop:10,
//         fontSize: 21,
//         fontWeight: "bold",
//         fontFamily:'GLBader',
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     categoriesList: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     categoryItem: {
//         flex: 1,
//         alignItems: "center",
//         marginBottom: 15,
//     },
//     categoryImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     categoryText: {
//         marginTop: 5,
//         fontSize: 14,
//         fontWeight: "bold",
//         textAlign: "center",
//     },
//     productListContent: {
//         paddingBottom: 20,
//     },
//     carouselcont1:{
//         marginLeft:10,
//         flex:1,
//         height:300,
//         borderRadius:20,
//         width:250,
//       },
//       carouselimg1:{
//         height:220,
//         marginLeft:20,
//         marginTop:20,
//         position:'relative',
//         width:300,
//         resizeMode:'stretch'
//       },
//       number: {
//         fontSize: 23,
//         fontWeight: '900',
//         color: '#f21655',
//         marginRight: 7,
//       },
//       Heading1: {
//         fontWeight: '600',
//         color: '#fff',
//         fontSize: 21,
//       },
// });

// export default HomeScreen;






import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Image,TouchableOpacity, Touchable } from 'react-native';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import TopLineText from '../components/TopLineText';
import BackgroundBanner from '../components/BackgroundBanner';
import hero from '../assets/hero.mp4';

import imageWomen from "../assets/categoriesimg.png";
import imageMen from "../assets/categoriesimg1.png";
import imageChild from "../assets/categoriesimg2.png";
import imageBeauty from "../assets/categoriesimg3.png";
import imageHome from "../assets/categoriesimg4.png";
import imageLuxe from "../assets/categoriesimg5.png";
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import card2 from '../assets/card2.png';
import productimg from '../assets/productimg.png';
import CardProduct from '../components/CardProduct';
import card3 from '../assets/card3.png';
import BottomComp from '../components/BottomComp';
import CategoryComponent from '../components/CategoryComponent';
import useCategoryManager from '../hooks/useCategoryManager';
import GaleriesLoader  from '../components/GaleriesLoader';


const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [cardProducts, setCardProducts] = useState([]);
    const {fetchTopProducts,fetchBannerProducts,banner} = useCategoryManager();
    const categoriess = [
        "Women's bags", "Women's wallets", "Robes", "Evening dresses", "Women's jumpsuits",
        "Women's shirts", "Women's sweaters", "Women's sweatshirts", "Women's pants", "Women's jeans",
        "Women's jewelry", "Women's watches", "Bracelets femme", "Women's coats", "Women's down jackets",
        "Women's jackets", "Women's shoes", "Women's ankle boots and boots", "Women's sneakers",
        "Men's bags", "Men's sweaters", "Men's sweatshirts", "T-shirts homme", "Men's suits",
        "Men's shirts", "Men's pants", "Men's jeans", "Women's vest", "Men's jewelry",
        "Men's watches", "Bracelets homme", "Men's coats", "Men's down jackets", "Men's jackets",
        "Men's shoes", "Men's ankle boots and boots", "Men's sneakers", "Men's loafers",
        "Woman's Site Map", "Man sitemap", "Beauty Sitemap", "Home site plan",
        "Child sitemap", "Sitemap Brands"
      ];
      

    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading,setLoading] = useState(false);

    const handlePressBanner44 = async (categoryId) => {
        setLoading(true); 
        try {
            const data = await fetchBannerProducts(categoryId);
            navigation.navigate('Dashboard', {
                screen: 'DashboardMain',
                params: { products: data }
            });
        } catch (error) {
            console.error('Error fetching banner products:', error);
        } finally {
            setLoading(false); 
        }
    };
    

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const latestProducts = await fetchTopProducts();
                setProducts(latestProducts);
            } catch (error) {
                console.error('Failed to fetch latest products:', error);
            }
        };
    
        loadProducts();


    
        // Set card products
        const cardProducts = [
            { id: '1', name: 'BirkenStock', image: card2 },
            { id: '2', name: 'BirkenStock', image: card2 },
            { id: '3', name: 'BirkenStock', image: card2 },
            { id: '4', name: 'BirkenStock', image: card2 },
        ];
        setCardProducts(cardProducts);
    
        // Set categories
        setCategories([
            { id: "1", name: "Women", image: imageWomen, title: 'Femme' },
            { id: "2", name: "Men", image: imageMen, title: 'Homme' },
            { id: "3", name: "Child", image: imageChild, title: 'Enfant' },
            { id: "4", name: "Beauty", image: imageBeauty, title: 'Beaute' },
            { id: "5", name: "Home", image: imageHome, title: 'Maison' },
            { id: "6", name: "Luxe", image: imageLuxe, title: 'Nouveautes' }
        ]);
    }, []);
    

    const handleSearch = (text) => {
        setSearchTerm(text);
        navigation.navigate('Searched',{
            screen:'Search'
        })
    };

    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderProduct = ({ item }) => (
        <ProductCard
          product={item}
          onPress={() => {
            navigation.navigate('Product', {
              screen: 'Product',
              params: { product: item } // pass product as param
            });
          }}
        />
      );
      
    const renderCardProduct = ({ item }) => <CardProduct product={item} />;
    const handleSearchClick = () => {
        navigation.navigate('SearchScreen');
    };

    const renderCategory = ({ item }) => (
        <View style={styles.categoryItem}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard',{title:item.title,item:item.name})}}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
            
        </View>
    );

    const handleFocus = () => {
        navigation.navigate('Searched',{
            screen:'Search'
        })
    }

    return (
        <View style={styles.container}>
           {loading && (
  <View style={styles.loaderOverlay}>
    <GaleriesLoader />
  </View>
)}

            <View style={{height:800,backgroundColor:'#fff'}}>
           
            <FlatList
                          showsVerticalScrollIndicator={false} 
                          
                ListHeaderComponent={
                    <>
                     
                       
                        <View style={{padding:10}}>
                            {/* <SearchBar onSearch={handleSearch} /> */}
                            {/* <SearchBar onFocus={() => navigation.navigate('Search')} /> */}
                            <SearchBar
                            
                readOnly={true}
                onFocus={handleFocus}  // go back to SearchScreen
            />  
                        </View>
                        <BackgroundBanner
                            videoSource={hero}
                            heading="THE 3 JOURNEYS"
                            subheading="-30%, -40% and more on a collection"
                            buttonText="TAKE ADVANTAGE OF IT"
                            onPress={()=>handlePressBanner44(13)}
                            />

                                                    
                        <View style={styles.categoriesContainer}>
                        <CategoryComponent onCategoryPress={handlePressBanner44} showLoader={() => setLoading(true)} closeLoader={() => setLoading(false)}  navigation={navigation} />
                        </View>

                        <BackgroundBanner
                            imageSource={banner2}
                            heading="Welcome to Our Store"
                            subheading="Discover the latest trends"
                            buttonText="Shop Now"
                            onPress={()=>handlePressBanner44(7)}
                        />

                        <BackgroundBanner
                            imageSource={banner1}
                            heading="Exclusive Offers"
                            subheading="Grab the best deals now"
                            buttonText="Shop Now"
                            onPress={()=>handlePressBanner44(11)}
                        />

                        <Text style={styles.sectionTitle}>Latest Products</Text>
                    </>
                }
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.productId}
                numColumns={2}
                contentContainerStyle={styles.productListContent}
                ListFooterComponent={
                    <>
                        {/* See More Section */}
                        <View style={{backgroundColor:'#FFFFFF'}} >
                            <TouchableOpacity style={styles.seemore} onPress={()=>{handlePressBanner44(44)}}>
                                <Text style={styles.seemoreText}>See More Articles</Text>
                    </TouchableOpacity>
                            {/* Repeated Banners */}
                            

                            <BackgroundBanner
                                imageSource={banner3}
                                heading="Best Sellers"
                                subheading="Shop the most popular products"
                                buttonText="View More"
                                onPress={()=>handlePressBanner44(12)}
                                />

                            {/* Repeated Products */}
                            <Text style={styles.sectionTitle}>More Products</Text>
                            <FlatList
                                data={filteredProducts}
                                renderItem={renderProduct}
                                keyExtractor={item => item.productId}
                                numColumns={2}
                                contentContainerStyle={styles.productListContent}
                            />
                            <TouchableOpacity style={styles.seemore} onPress={()=>{handlePressBanner44(44)}}>
                            <Text style={styles.seemoreText}>See More Articles</Text>
                            </TouchableOpacity>



                            {/* Repeated Banners */}
                            

                            <BackgroundBanner
                                imageSource={banner4}
                                heading="Best Sellers"
                                subheading="Shop the most popular products"
                                buttonText="View More"
                                onPress={()=>handlePressBanner44(51)}
                                />

                            {/* Repeated Products */}
                            <Text style={styles.sectionTitle}>More Products</Text>
                            <FlatList
                                data={filteredProducts}
                                renderItem={renderProduct}
                                keyExtractor={item => item.productId}
                                numColumns={2}
                                contentContainerStyle={styles.productListContent}
                            />
                            <TouchableOpacity style={styles.seemore} onPress={()=>{handlePressBanner44(45)}}>
                            <Text style={styles.seemoreText}>See More Articles</Text>
                            </TouchableOpacity>

                            <BackgroundBanner
                                imageSource={banner5}
                                heading="Best Sellers"
                                subheading="Shop the most popular products"
                                buttonText="View More"
                                onPress={()=>handlePressBanner44(55)}
                                />

                            <BackgroundBanner
                                videoSource={require('../assets/backgroundvid.mp4')}  // Provide video source
                                imageSource={null}         // Set null to show the video
                                heading="Best Sellers"
                                subheading="Shop the most popular products"
                                buttonText="View More"
                                onPress={()=>handlePressBanner44(59)}
                            />

                            {/* Repeated Products */}
                            <Text style={styles.sectionTitle}>More Products</Text>
                            <FlatList
                                data={filteredProducts}
                                renderItem={renderProduct}
                                keyExtractor={item => item.productId}
                                numColumns={2}
                                contentContainerStyle={styles.productListContent}
                            />
                            <Text style={styles.sectionTitle}>More Inspiration</Text>

                            <FlatList
                                data={filteredProducts}
                                renderItem={renderProduct}
                                keyExtractor={item => item.productId}
                                numColumns={2}
                                contentContainerStyle={styles.productListContent}
                            />
                            
                            <BackgroundBanner
                                imageSource={card3}
                                heading="Best Sellers"
                                subheading="Shop the most popular products"
                                buttonText="View More"
                                onPress={()=>handlePressBanner44(73)}
                                />
                            <Text style={[styles.Heading1,{marginTop:10},{marginLeft:20},{color:'black'}]}>Our best selections</Text>
                            <View style={styles.containers}>
                                <FlatList
                                    data={categoriess}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={2} // Set 2 columns
                                    columnWrapperStyle={styles.row} // Space between columns
                                    renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.item}>
                                        <Text style={styles.text}>{item}</Text>
                                    </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                        <View style={{backgroundColor:'#000',marginTop:30,height:750}}>
                            <BottomComp/>
                        </View>
                        
                    </>
                }
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    containers: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
        paddingTop: 40
      },
      item: {
        flex: 1,
             
        alignItems: 'left'
      },
      text: {
        fontSize: 16,
        color: '#333',
      },
    categoriesContainer: {
        paddingHorizontal: 10,
    },
    seemore: {
        height: 50,
        width: '90%',
        borderRadius: 30,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgb(27, 23, 27)',
        marginTop: 20,
    },
    row: {
        justifyContent: 'space-between'
      },
    seemoreText: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 21,
    },
    sectionTitle: {
        marginTop:10,
        fontSize: 21,
        fontWeight: "bold",
        fontFamily:'GLBader',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    categoriesList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryItem: {
        flex: 1,
        alignItems: "center",
        marginBottom: 15,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    categoryText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    productListContent: {
        paddingBottom: 20,
    },
    carouselcont1:{
        marginLeft:10,
        flex:1,
        height:300,
        borderRadius:20,
        width:250,
      },
      carouselimg1:{
        height:220,
        marginLeft:20,
        marginTop:20,
        position:'relative',
        width:300,
        resizeMode:'stretch'
      },
      number: {
        fontSize: 23,
        fontWeight: '900',
        color: '#f21655',
        marginRight: 7,
      },
      Heading1: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 21,
      },
      loaderOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(255, 255, 255)', // Optional: dim the background
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999, // make sure it's on top
        elevation: 10, // Android-specific stacking
      },
      
});

export default HomeScreen;