import React, {useState , useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";



function App() {
  
  const [listings , setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);
  
  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }
  
  const displayedListings = listings.filter((listing) => 
  listing.description.toLowerCase().includes(Search.toLowerCase()));
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listing={displayedListings} onRemoveList={handleRemoveListing} />
    </div>
  );
}




export default App;
