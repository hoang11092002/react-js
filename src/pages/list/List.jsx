import{
  faSearch,
  faCalendar,
  faChevronDown,
}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./list.css";
import SearchItem from "../../compoment/searchItem/SearchItem";
import Navbar from "../../compoment/navbar/Navbar";
import Footer from "../../compoment/footer/Footer";
import FilterableHotelTable from "../../compoment/FilterableHotelsTable/FilterableHotelTable";

const HOTELS = [
  {
      category : "Studio Apartment with Air conditioning",
      name: "Joy Hotel",
      price: "100$",
      cover_image: "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/227/2017/12/04094723/Exterior1.jpg",
      stocked : false
  },
  {
      category : "Studio Apartment with Air conditioning",
      price: "1023$",
      cover_image: "https://pistachiohotel.com/UploadFile/Gallery/Overview/a2.jpg",
      stocked : true,
      name: "Hyatt Regency Amsterdam",
  },
  {
      category : "Studio Apartment with Air conditioning",
      name: "Khách sạn NH Atlanta Rotterdam",
      price: "1030$",
      cover_image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/328272490.webp?k=0fac204c46a91b5fd1ed232ad9d44eea32e32418379ccc62a04d6d157c90908e&o=&s=1",
      stocked : true

  },
  {
      category: "Studio Apartment with Air conditioning",
      name: "Postillion Hotel WTC RotterdamMở trong cửa sổ mới",
      price: "1400$",
      cover_image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/286267274.webp?k=3f808b1a436da2ac6fa38941ae59638fd77b1e101db1e13b9d08a168ea7aa498&o=&s=1",
      stocked : true
  },
  {
    category: "Studio Apartment with Air conditioning",
    name: "RART Hotel",
    price: "1200$",
    cover_image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/353732281.webp?k=e1082d83bd7b0a26d520e792b74371858c8c1e471df79f57d2b6bc3cdfc73b37&o=&s=1",
    stocked : true
},
{
  category: "Studio Apartment with Air conditioning",
  name: "Regency Amsterdam",
  price: "1300$",
  cover_image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/132177043.webp?k=f7575e1077b7c58f44e9c940546659c91fdfdfba4b51a60f552dbe72454ed160&o=&s=1",
  stocked : false
},
{
  category: "ibis budget Rotterdam The Hague Airport",
  name: "Urban Residences RotterdamMở trong cửa sổ mới",
  price: "1400$",
  cover_image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/248125122.webp?k=bc002ab46d38e062f02649eae6b3ea2412777f4f4f52cafa473e4f2bfad13863&o=&s=1",
  stocked : false
},
];
const List = () => {

  return (
    <div>
      <Navbar/>
      {/* <Navbar />
      <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination/property name:</label>
              <input type="text" placeholder="Royal Room" className="name"/>
              <FontAwesomeIcon icon={faSearch} className="name1" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <input type="text" placeholder="" className="name"/>
              <FontAwesomeIcon icon={faCalendar} className="name1" />
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <div className="lsItem">
              <label>Check-out Date</label>
              <input type="text" placeholder="" className="name"/>
              <FontAwesomeIcon icon={faCalendar} className="name1" />
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <div className="lsItem">
              <label>30-night stay</label>
              <input type="text" placeholder="2 adults-0 children-1 room" className="name02"/>
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          
            <FilterableHotelTable hotels={HOTELS} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default List;
