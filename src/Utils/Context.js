import { createContext, useEffect, useState } from 'react';

const newContext = createContext();
export const Context = newContext;

const AppContext = (props) => {

    // heandle search bar
    // #######################################
    const [openSearch, SetSearch] = useState(false);

    const SearchBarHendle = () => {
        if (openSearch === false) { SetSearch(true) }
        else { SetSearch(false); }
    }

    // #######################################
    // Phone Crousel CardSize
    // #####################################
    const [PhoneCrouselCardSize] = useState(2);

    // App Name Handle
    const [appName, setAppName] = useState("Shopypi");
    // #####################################

    // footer data handle
    // ####################################
    const [FooteText, setFooteText] = useState("");

    const [Phone, SetPhone] = useState("");
    const [mail, setmail] = useState("");
    // ####################################

    // contact us data handle
    const [contactUsHading] = useState("Shopypi Contact Us");
    // ####################################

    // Best Selling Product api 
    const [bestsallings, setBestSelling] = useState({});

    // all product's 
    const [pruducts, setProducts] = useState({});

    // NewArrival product
    const [getNewArrival, setNewArrival] = useState({});

    // send data in chackout pge.
    const [getCartProduct, SetCartProduct] = useState([]);
    const [getCartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    // find to releted product 
    const [getReletedProduct, SetReletedProduct] = useState([]);
    const [getReletedSlug, SetReletedSlug] = useState([]);

    // #################################################
    //  set the data in shoppin cart
    const BestSelling = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?[filters][categories][Title]=BestSalling&pagination[start]=0&populate=*&pagination[limit]=10`);
            const resData = await res.json();
            setBestSelling(resData);
        } catch (error) {
            return;
        }
    }



    const Getproduct = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?populate=*`);
            const resData = await res.json();
            setProducts(resData);

        } catch (error) {
            return;
        }
    }



    const Homepagedata = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/footers?populate=*`);
            const resData = await res.json();

            setAppName(resData?.data[0]?.attributes?.Title);
            setFooteText(resData?.data[0]?.attributes?.Text);

            SetPhone(resData?.data[0]?.attributes?.ContactNum);
            setmail(resData?.data[0]?.attributes?.Email);
        } catch (error) {
            return;
        }
    }


    // New arrival method 
    const NewArrival = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?&[filters][categories][Title]=NewArrival&pagination[start]=0&pagination[limit]=10&populate=*`);
            const resData = await res.json();
            setNewArrival(resData);

        } catch (error) {
            return;
        }
    }


    // Tranding data get from the api  
    const [getTranding, SetTranding] = useState({})
    const Trandding = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?&[filters][categories][Title]=TrandingProduct&pagination[start]=0&pagination[limit]=10&populate=*`);
            const resData = await res.json();
            SetTranding(resData);
        } catch (error) {
            return;
        }
    }

    // all category fech from api
    const [getAllCategory, setAllcategory] = useState({})
    const AllCategory = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/categories?populate=*`);
            const resData = await res.json();
            setAllcategory(resData);
        } catch (error) {
            return;
        }
    }

    useEffect(() => {
        AllCategory();
        Trandding();
        NewArrival();
        BestSelling();
        Getproduct();
        Homepagedata();
    }, []);


    const handleAddToCart = (products, color, Qty) => {
        let items = [...getCartProduct];
        let index = items.findIndex(p => p.id === products.id);

        if (index !== -1) {
            items[index].quantity += Qty;
            items[index].Colors = color;
            // items[index].attributes.size = sizes;
        } else {
            products.quantity = Qty
            items = [...items, products];
        }

        SetCartProduct(items);
        localStorage.setItem('MyYouWE', JSON.stringify(getCartProduct));
    }

    const handleRemoveToCart = (products) => {
        let items = [...getCartProduct];
        items = items.filter(p => p.id !== products.id)
        SetCartProduct(items);
    }

    const handleQtyToCart = (type, products) => {
        let items = [...getCartProduct];
        let index = items.findIndex(p => p.id === products.id);

        if (type === "inc") {
            items[index].quantity += 1;
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -= 1;
        }
        SetCartProduct(items);
    }


    return (
        <Context.Provider value={{
            appName, PhoneCrouselCardSize, FooteText, Phone, mail, contactUsHading, openSearch, SetSearch, SearchBarHendle, bestsallings, pruducts, getNewArrival, getTranding, getAllCategory,

            // Find releted product
            getReletedProduct, SetReletedProduct,
            getReletedSlug, SetReletedSlug,

            // add to cart endpoint's
            getCartProduct, SetCartProduct, getCartCount, setCartCount, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveToCart, handleQtyToCart
        }}>
            {props.children}
        </Context.Provider>
    );
}

export default AppContext;
