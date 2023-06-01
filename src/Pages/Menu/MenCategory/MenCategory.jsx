import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/Menuitem/Menuitem";


const MenCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
        </div>
    );
};

export default MenCategory;