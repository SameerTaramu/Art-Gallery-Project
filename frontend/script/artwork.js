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

    const artworkItemHtml = `
      <div class="box">
        <img src=${artwork.image} alt="" class="product-img">
        <p>Artist Name: ${artwork.name}</p>
        <p>Description: ${artwork.description}</p>
        <p>Type: Drawing</p>
        <span class="price">Rs: ${artwork.price}</span>
        <div class="rating">
          Rating: 
          ${[...Array(5)].map((_, i) => 
            `<span class="star" data-value="${i + 1}" style="cursor:pointer;">&#9733;</span>`).join("")}
        </div>
        <a href="#" class="btn">Add To Cart</a>
      </div>
    `;

    RootDiv.innerHTML = artworkItemHtml;
    artworksContainer.insertAdjacentElement("beforeend", RootDiv);
  });

  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("click", (event) => {
      const selectedRating = event.target.dataset.value;
      const parent = event.target.parentElement;
      const allStars = parent.querySelectorAll(".star");
      allStars.forEach((s, index) => {
        s.style.color = index < selectedRating ? "gold" : "black";
      });
      console.log(`Rated ${selectedRating} stars`);
    });
  });
};

displayAllArtworks();

