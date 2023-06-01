import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenCategory from '../MenCategory/MenCategory';

const Menu = () => {
    const [menu] =useMenu();
    const desserts = menu.filter(item=> item.category === "dessert");
    const salad = menu.filter(item=> item.category === "salad");
    const soup = menu.filter(item=> item.category === "soup");
    const pizza = menu.filter(item=> item.category === "pizza");
    const offered = menu.filter(item=> item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main  cover*/}
            <SectionTitle subHeading="Don't Miss" heading="ToDay's Offers"></SectionTitle>
            {/* offer menu items */}
            <MenCategory items={offered}></MenCategory>
            {/* dessert menu item */}
            <MenCategory items={desserts} title="desserts"  img={dessertImg}></MenCategory>
             {/* pizza menu item */}
            <MenCategory items={pizza} title="pizza"img={pizzaImg}></MenCategory>
            <MenCategory items={salad} title="salad"  img={saladImg}></MenCategory>
            <MenCategory items={soup} title="soup"  img={soupImg}></MenCategory>
        </div>
    );
};

export default Menu;