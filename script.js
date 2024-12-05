document.addEventListener('DOMContentLoaded', function () {
  
    // 1. Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.item-card button');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const itemCard = button.closest('.item-card');
        const itemName = itemCard.querySelector('.title').textContent;
        const itemPrice = itemCard.querySelector('.price').textContent;
        
        // Simulating the cart (just showing an alert here)
        alert(`${itemName} has been added to your cart!`);
      });
    });
  
    // 2. Handle Search Bar (toggle visibility)
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.classList.add('search-input');
    
    
    searchIcon.addEventListener('click', function () {
      if (!searchIcon.classList.contains('active')) {
        searchIcon.classList.add('active');
        document.body.appendChild(searchInput); // Append the input field for search
        searchInput.focus();
      } else {
        searchIcon.classList.remove('active');
        searchInput.remove(); // Remove the input field when clicking again
      }
    });
  
    // 3. Open & Close Cart (Simulate a cart modal)
    const cartIcon = document.querySelector('.fa-shopping-cart');
    const cartModal = document.createElement('div');
    cartModal.classList.add('cart-modal');
    cartModal.innerHTML = `<div class="cart-content">
                             <h3>Your Cart</h3>
                             <p>Items: 0</p>
                             <button class="close-cart">Close</button>
                           </div>`;
  
    cartIcon.addEventListener('click', function () {
      document.body.appendChild(cartModal);
    });
  
    // Close cart modal when 'Close' button is clicked
    cartModal.addEventListener('click', function (e) {
      if (e.target.classList.contains('close-cart') || e.target.classList.contains('cart-modal')) {
        cartModal.remove();
      }
    });
  
    // 4. Handle Newsletter Subscription Form
    const subscribeButton = document.querySelector('.subscribe-section button');
    const subscribeInput = document.querySelector('.subscribe-section input');
    
    subscribeButton.addEventListener('click', function (event) {
      event.preventDefault();
      const email = subscribeInput.value.trim();
      if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        subscribeInput.value = ''; // Clear input field
      } else {
        alert('Please enter a valid email address.');
      }
    });
    // 5. Show/Hide the "View All" link for Trending Now section
    const viewAllLink = document.querySelector('.trending-items a');
    const trendingItemsSection = document.querySelector('.trending-items');
    
    if (viewAllLink) {
      viewAllLink.addEventListener('click', function (event) {
        event.preventDefault();
        trendingItemsSection.style.display = 'block'; // Show all items if 'View All' is clicked
      });
    }
  });
  //change hover using
  const dropdown = document.querySelectorAll(".dropdown");
  const dropdown_menu = document.querySelectorAll(".dropdown-menu");
  dropdown.forEach((div, i) => {
    div.addEventListener('mouseover', () => {
      // Highlight the current div
      let index = i;
      dropdown_menu[index].style.display = "block";
  });
  div.addEventListener('mouseout', () => {
      // Remove the highlight
      dropdown_menu.forEach(e => {
        e.style.display = "none";
      })  
  });
  });
  let currentSlide = 0;
function showSlide(index) {
  const imgs = document.querySelectorAll(".img");
  if (index >= imgs.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = imgs.length - 1;
  } else {
    currentSlide = index;
  }
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === currentSlide);
  });
}
function changeImg(step) {
  showSlide(currentSlide + step);
}
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
setInterval(() => {
  changeImg(1);
}, 3000);