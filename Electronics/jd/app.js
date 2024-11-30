console.log('app.js');

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200
    },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800
    },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 40
    },
    { id: 4, name: 'Jeans', category: 'Clothing', price: 60
    },
    { id: 5, name: 'Coffee Maker', category: 'Appliances', price: 150
    },
    { id: 6, name: 'Blender', category: 'Appliances', price: 120
    },
    { id: 7, name: 'TV', category: 'Electronics', price: 600
    },
    { id: 8, name: 'Socks', category: 'Clothing', price: 10
    },
    { id: 9, name: 'Microwave', category: 'Appliances', price: 180
    },
    { id: 10, name: 'Smart Watch', category: 'Electronics', price: 250
    }
];

// Filter products by category

const filterProductByCategory = (products, category) => {
    return products.filter((product) => product.category === category);
};

// Sort products by price in ascending order

const sortProductsByPriceAscending = (products) => {
    return products.sort((a, b) => a.price - b.price);
};

// Sort products by price in descending order

const sortProductsByPriceDescending = (products) => {
    return products.sort((a, b) => b.price - a.price);
};

console.log('Filtering products by category');
console.log(filterProductByCategory(products, 'Electronics'));
console.log('Sorting products by price ascending order');
console.log(sortProductsByPriceAscending(products));
console.log('Sorting products by price descending order');
console.log(sortProductsByPriceDescending(products));