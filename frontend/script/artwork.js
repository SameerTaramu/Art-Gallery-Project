
const fetchAllArtworks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products/all");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const displayAllArtworks = async () => {
  const artworks = await fetchAllArtworks();
  const artworksContainer = document.querySelector("#wrapper");
  artworksContainer.innerHTML = "";

  artworks.forEach((artwork) => {
    const RootDiv = document.createElement("div");
    RootDiv.classList.add("box");

    // const artworkItemHtml = `
    //   <div class="box">
    //     <img src=${artwork.image} alt="" class="product-img">
    //     <p>Artist Name: ${artwork.name}</p>
    //     <p>Description: ${artwork.description}</p>
    //     <p>Type: Drawing</p>
    //     <span class="price">Rs: ${artwork.price}</span>
    //      <div class="quantity">
    //     <label for="quantity">Quantity: </label>
    //     <input type="number" id="quantity" name="quantity" min="1" value="1" style="width: 30px;">
    // </div>
    //     <div class="rating">
    //       Rating: 
    //       ${[...Array(5)]
    //         .map(
    //           (_, i) =>
    //             `<span class="star" data-value="${
    //               i + 1
    //             }" style="cursor:pointer;">&#9733;</span>`
    //         )
    //         .join("")}
    //     </div>
    //     <a href="#" class="add-to-cart">Add To Cart</a>
    //   </div>
    // `;
    const artworkItemHtml = `
  <div class="box" data-artwork-id="${artwork._id}">
    <img src=${artwork.image} alt="" class="product-img">
    <p>Artist Name: ${artwork.name}</p>
    <p>Description: ${artwork.description}</p>
    <p>Type: Drawing</p>
    <div class="rating">
      Rating: 
      ${[...Array(5)]
        .map(
          (_, i) =>
            `<span class="star" data-value="${i + 1}" style="cursor:pointer; color:${i < Math.round(artwork.averageRating || 0) ? "gold" : "black"
            }">&#9733;</span>`
        )
        .join("")}
    </div>
  </div>
`;


    RootDiv.innerHTML = artworkItemHtml;
    artworksContainer.insertAdjacentElement("beforeend", RootDiv);
  });

  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("click", async (event) => {
      const selectedRating = event.target.dataset.value;
      const parent = event.target.parentElement;
      const artworkId = parent.parentElement.dataset.artworkId;

      const allStars = parent.querySelectorAll(".star");
      allStars.forEach((s, index) => {
        s.style.color = index < selectedRating ? "gold" : "black";
      });

      console.log(`Rated ${selectedRating} stars for artwork ID: ${artworkId}`);

      try {
        const response = await axios.post("http://localhost:3000/api/ratings", {
          artworkId,
          rating: selectedRating,
        });
        console.log("Rating saved:", response.data);
      } catch (error) {
        console.error("Error saving rating:", error);
      }
    });
  });

};

displayAllArtworks();
