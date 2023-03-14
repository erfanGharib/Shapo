import Header from "../components/header/header";
import Grid from "../components/grid";
import ProductSlider from "../components/product/productSlider";
import Container from "../components/container";
import imgNancyChair from '../assets/images/featuredProducts/nancy-chair.png';
import imgArtDecoHome from '../assets/images/featuredProducts/art-deco-home.png';
import imgTableWoodPine from '../assets/images/featuredProducts/table-wood-pine.png';
import ProductGrid from "../components/product/productGrid";
import PostGrid from "../components/blog/postGrid";

const Home = () => {
    return (
        <main className="w-full">
            <Header />
            <Container
                supTitle='محصولات ویژه'
                title='صندلی نانسی'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText='فقط 1,100,000'
                imgSrc={imgNancyChair}
                rtl={false}
            />
            <Container 
                supTitle='محصولات ویژه'
                title='میز چوب کاج'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText='فقط 1,500,000'
                imgSrc={imgTableWoodPine}
                />
            <Container 
                supTitle='محصولات ویژه'
                title='گلدان چوبی'
                desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
                buttonText='فقط 100,000'
                imgSrc={imgArtDecoHome}
                rtl={false}
            />
            <ProductSlider title='پر فروش ترین ها' />
            <PostGrid />
        </main>
    );
}
export default Home;