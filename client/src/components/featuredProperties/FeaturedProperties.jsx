import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
const {loading,data, error}= useFetch('http://localhost:7000/api/hotels?&min=9000&max=20000')
// const images=[
//   "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
//   "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
//   "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1",
//   "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
// ]
// console.log(data)
  return (
    <div className="fp">
{  loading?"loading..." :  
    <>{
      data.map((e)=>(
       
       <>
       {
        e.featured &&
        <div className="fpItem" key={e._id}>
        <img
          src={e?.photos[0]}
          alt="hotels img"
          className="fpImg"
        />
        <span className="fpName">{e.name}</span>
        <span className="fpCity">{e.city}</span>
        <span className="fpPrice">Starting from ₹{e.cheapestPrice}</span>
        {
          e.rating && <div className="fpRating">
          <button>{e.rating}</button>
          <span>Excellent</span>
        </div>
        }
      </div>
}
       </>
      
      ))
    }
     
    
    </>
      }
    
    </div>
  );
};

export default FeaturedProperties;
