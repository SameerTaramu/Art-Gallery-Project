const uploadFormEl = document.querySelector("#upload-form");

const uploadProduct = async (e) => {
  e.preventDefault();
  const user = getUserFromLocalStorage();
  const title = document.querySelector("#artwork-name").value;
  const description = document.querySelector("#artwork-description").value;
  const price = +document.querySelector("#artwork-price").value;
  const quantity = +document.querySelector("#artwork-quantity").value;
  const category = document.querySelector("#artwork-type").value;
  const artworkImage = document.querySelector("#artwork-image").files[0];
  if(!user){
    return alert("Please login to upload");
  }
  
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  let artworkImageBase64 = null;
  if (artworkImage) {
    try {
      artworkImageBase64 = await convertToBase64(artworkImage);
    } catch (error) {
      console.error("Error converting file to base64:", error);
      alert("Error processing the file. Please try again.");
      return;
    }
  }

  
  const productData = {
    name: title,
    description: description,
    price: price,
    quantity: quantity,
    category: category,
    owner: user.userId,
    image: artworkImageBase64, 
  };

  
  axios
    .post("http://localhost:3000/api/products", productData, {
      headers: {
        "Content-Type": "application/json", 
      },
    })
    .then((response) => {
      console.log(response.data);
      window.location.reload();
      alert("Artwork uploaded successfully!");
    })
    .catch((error) => {
      console.error("Error uploading artwork:", error);
      alert("Error uploading artwork. Please try again.");
    });
};

uploadFormEl.addEventListener("submit", uploadProduct);
