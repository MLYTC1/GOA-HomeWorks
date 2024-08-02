class ShoppingCart {
    constructor() {
        this.cart = [];
        this.totalPrice = 0;
        this.quantity = 0;
        this.cartItemsElement = document.getElementById('cart-items');
        this.totalPriceElement = document.getElementById('total-price');
        this.totalQuantityElement = document.getElementById('quantity');

        // Bind event listener to the course section for handling quantity updates
        document.querySelector('.course').addEventListener('click', this.handleQuantityUpdate.bind(this));
        
        // Load saved cart data on page load
        this.loadCart();
        this.displayCart();
    }

    loadCart() {
        const savedCart = localStorage.getItem('cart');
        const savedTotalPrice = localStorage.getItem('totalPrice');
        const savedQuantity = localStorage.getItem('quantity');
        if (savedCart && savedTotalPrice && savedQuantity) {
            this.cart = JSON.parse(savedCart);
            this.totalPrice = parseFloat(savedTotalPrice);
            this.quantity = parseInt(savedQuantity, 10);
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('totalPrice', this.totalPrice.toString());
        localStorage.setItem('quantity', this.quantity.toString());
    }

    displayCart() {
        this.totalPriceElement.textContent = `Total: $${this.totalPrice}`;
        this.totalQuantityElement.textContent = `Quantity: ${this.quantity}`;
    }

    handleQuantityUpdate(event) {
        const target = event.target;

        if (target.classList.contains('fa-plus') || target.classList.contains('fa-minus')) {
            const courseName = target.dataset.course;
            const price = parseFloat(target.dataset.price);
            const isIncrement = target.classList.contains('fa-plus');

            if (isIncrement) {
                this.addToCart(courseName, price);
            } else {
                this.removeFromCart(courseName, price);
            }

            this.displayCart();
        }
    }

    addToCart(courseName, price) {
        this.cart.push({ name: courseName, price: price });
        this.totalPrice += price;
        this.quantity++;
        this.updateCourseQuantity(courseName);
        this.saveCart();
    }

    removeFromCart(courseName, price) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].name === courseName && this.cart[i].price === price) {
                this.totalPrice -= this.cart[i].price;
                this.cart.splice(i, 1);
                this.quantity--;
                this.updateCourseQuantity(courseName);
                break;
            }
        }
        this.saveCart();
    }

    updateCourseQuantity(courseName) {
        const courseQuantityElement = document.querySelector(`.quantity span[data-course="${courseName}"]`);
        if (courseQuantityElement) {
            let count = 0;
            for (let item of this.cart) {
                if (item.name === courseName) {
                    count++;
                }
            }
            courseQuantityElement.textContent = count;
        }
    }
}

// Initialize the shopping cart on page load
const shoppingCart = new ShoppingCart();