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

    // Top Banner data handle
    const [TopBannerHeading, setTopBannerHeading] = useState("");
    const [TopBannerParagraph, setTopBannerParagraph] = useState("");
    const [TopBannerImg, setTopBannerImg] = useState("https://imagescdn.thecollective.in/img/app/product/8/898415-10977834.jpg?w=900&amp;auto=format");
    // #######################################

    // Phone Crousel CardSize
    // #####################################
    const [PhoneCrouselCardSize] = useState(2);

    // App Name Handle
    const [appName, setAppName] = useState("YouW Fashion");
    // #####################################

    // footer data handle
    // ####################################
    const [FooteText, setFooteText] = useState("");

    const [Phone, SetPhone] = useState("");
    const [mail, setmail] = useState("");
    // ####################################

    // contact us data handle
    const [contactUsHading] = useState("YouWe Fashion Contact Us");
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
        const res = await fetch(`http://localhost:1337/api/listings?&[filters][categories][name]=BestSalling&pagination[start]=0&pagination[limit]=10&populate=*`);
        const resData = await res.json();
        setBestSelling(resData);
    }



    const Getproduct = async () => {
        const res = await fetch(`http://localhost:1337/api/listings?populate=*`);
        const resData = await res.json();
        setProducts(resData);
    }



    const Homepagedata = async () => {
        const res = await fetch(`http://localhost:1337/api/footers`);
        const resData = await res.json();

        // setTopBannerHeading(resData[0]?.TopBanner_title);
        // setTopBannerParagraph(resData[0]?.TopBanner_paragraph);
        // setTopBannerImg(resData[0]?.TopBanner_image);

        setAppName(resData?.data[0]?.attributes?.Title);
        setFooteText(resData?.data[0]?.attributes?.Text);

        SetPhone(resData?.data[0]?.attributes?.ContactNum);
        setmail(resData?.data[0]?.attributes?.Email);
    }



    // New arrival method 
    const NewArrival = async () => {
        const res = await fetch(`http://localhost:1337/api/listings?&[filters][categories][name]=NewArrival&pagination[start]=0&pagination[limit]=10&populate=*`);
        const resData = await res.json();
        setNewArrival(resData);
    }


    // Tranding data get from the api  
    const [getTranding, SetTranding] = useState({})
    const Trandding = async () => {
        const res = await fetch(`http://localhost:1337/api/listings?&[filters][categories][name]=TrandingProduct&pagination[start]=0&pagination[limit]=10&populate=*`);
        const resData = await res.json();
        SetTranding(resData);
    }

    // all category fech from api
    const [getAllCategory, setAllcategory] = useState({})
    const AllCategory = async () => {
        const res = await fetch(`http://localhost:1337/api/categories?&populate=*`);
        const resData = await res.json();
        setAllcategory(resData);
    }

    useEffect(() => {
        AllCategory();
        Trandding();
        NewArrival();
        BestSelling();
        Getproduct();
        Homepagedata();
    }, []);


    const handleAddToCart = (product, color, Qty) => {
        let items = [...getCartProduct];
        let index = items.findIndex(p => p.id === product.id);

        if (index !== -1) {
            items[index].attributes.quantity += Qty;
            items[index].attributes.Colors = color;
            // items[index].attributes.size = sizes;
        } else {
            product.attributes.quantity = Qty
            items = [...items, product];
        }

        SetCartProduct(items);
        localStorage.setItem('MyYouWE', JSON.stringify(getCartProduct));
    }

    const handleRemoveToCart = (product) => {
        let items = [...getCartProduct];
        items = items.filter(p => p.id !== product.id)
        SetCartProduct(items);
    }

    const handleQtyToCart = (type, product) => {
        let items = [...getCartProduct];
        let index = items.findIndex(p => p.id === product.id);

        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        SetCartProduct(items);
    }


    return (
        <Context.Provider value={{
            appName, TopBannerHeading, PhoneCrouselCardSize, TopBannerParagraph, TopBannerImg, FooteText, Phone, mail, contactUsHading, openSearch, SetSearch, SearchBarHendle, bestsallings, pruducts, getNewArrival, getTranding, getAllCategory,

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
