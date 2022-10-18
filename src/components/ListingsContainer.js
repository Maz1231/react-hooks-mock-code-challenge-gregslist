import React from "react";
import ListingsCard from "./ListingCard"

function ListingsContainer({listings, onRemoveListing}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => ( 
        <ListingsCard 
        key={listing.id}
        listing = {listing}
        onRemoveList = {onRemoveListing}/> 
        ))} 

      </ul>
    </main>
  );
}

export default ListingsContainer;
