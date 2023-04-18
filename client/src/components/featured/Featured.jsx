import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("https://hotel-booking-api-xaf9.onrender.com/api/hotels/countByCity?cities=mumbai,patna,jaipur")
// console.log("first", data)
  return (
    <div className="featured">
    {loading?"Loading Please Wait": 
    <>
    <div className="featuredItem">
        <img
          src="https://www.pmc.bihar.gov.in/assets/img/patna-museum.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Patna</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UuahiD0ZlqTjQ5P9t0ytvzIU5vl92eFDrg"
        
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></> }
    </div>
  );
};

export default Featured;
