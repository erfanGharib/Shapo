import Header from "../components/header/header";
import ProductSlider from "../components/product/productSlider";
import Container from "../components/container";
import imgNancyChair from '../assets/images/featuredProducts/nancy-chair.png';
import imgArtDecoHome from '../assets/images/featuredProducts/art-deco-home.png';
import imgTableWoodPine from '../assets/images/featuredProducts/table-wood-pine.png';
import PostGrid from "../components/blog/postGrid";
import { useSelector } from "react-redux";

const Home = () => {
    const { data } = useSelector(state => state.$_products);
    return (
        <main className="w-full flex items-start flex-col">
            <Header />
            <Container
                supTitle='محصولات ویژه'
                title='صندلی نانسی'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText={1100000}
                imgSrc={imgNancyChair}
                rtl={false}
            />
            <Container 
                supTitle='محصولات ویژه'
                title='میز چوب کاج'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText={1500000}
                imgSrc={imgTableWoodPine}
            />
            <Container 
                supTitle='محصولات ویژه'
                title='گلدان چوبی'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText={100000}
                imgSrc={imgArtDecoHome}
                rtl={false}
            />
            <ProductSlider products={data} title='پر فروش ترین ها' />
            
            <div className='w-5/6 mx-auto'>
                <PostGrid />
            </div>
        </main>
    );
}
export default Home;