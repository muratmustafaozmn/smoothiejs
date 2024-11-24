class Smoothie {
    constructor(name, ingredients, size, extras) {
      this.name = name;
      this.ingredients = ingredients;
      this.size = size;
      this.extras = extras;
    }
  
    calculatePrice() {
      const sizePrices = { Small: 5, Medium: 7, Large: 9 };
      const ingredientsPrice = this.ingredients.length * 2;
      const extrasPrice = this.extras.length * 1;
  
      return sizePrices[this.size] + ingredientsPrice + extrasPrice;
    }
  
    getDescription() {
      return `
        ${this.name} ordered a ${this.size} smoothie with:
        - Ingredients: ${this.ingredients.join(', ')}.
        - Extras: ${this.extras.length ? this.extras.join(', ') : 'None'}.
      `;
    }
  }
  
  // Event Listener
  document.getElementById('order-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const size = document.getElementById('size').value;
    const ingredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                             .map(checkbox => checkbox.value);
    const extras = Array.from(document.querySelectorAll('#extras input[type="checkbox"]:checked'))
                        .map(checkbox => checkbox.value);
  
    if (!name || ingredients.length === 0) {
      alert('Please fill out your name and select at least one ingredient.');
      return;
    }
  
    const smoothie = new Smoothie(name, ingredients, size, extras);
  
    // Display summary
    const output = document.getElementById('output');
    const summary = document.getElementById('summary');
    const total = document.getElementById('total');
    const smoothieImage = document.getElementById('smoothie-image');
  
    summary.textContent = smoothie.getDescription();
    total.textContent = `Total Price: $${smoothie.calculatePrice()}`;
  
    // Display an image
    smoothieImage.src = 'https://source.unsplash.com/featured/?smoothie';
    smoothieImage.style.display = 'block';
  
    // Show output
    output.style.display = 'block';
    output.style.animation = 'fadeIn 1s ease-in-out';
  });
  