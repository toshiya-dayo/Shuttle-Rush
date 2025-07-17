document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".menu-list1");

  const products = [
    { name: "vivictor-200", price: "¥20,000", img: "img/raket1.png", category: "ラケット" },
    { name: "takorice-99", price: "¥23,000", img: "img/raket2.png", category: "ラケット" },
    { name: "gapao-1000pro", price: "¥10,000", img: "img/raket3.png", category: "ラケット" },
    { name: "minion-rush GAME", price: "¥12,000", img: "img/raket4.png", category: "ラケット" },
    { name: "sv900", price: "¥6,000", img: "img/shose1.png", category: "シューズ" },
    { name: "monosv-800", price: "¥6,500", img: "img/shose2.png", category: "シューズ" },
    { name: "ラケットバッグA", price: "¥9,000", img: "img/bag1.png", category: "バッグ" },
    { name: "ラケットバッグB", price: "¥9,000", img: "img/bag2.png", category: "バッグ" }
  ];

  function generateProducts(list) {
    productList.innerHTML = "";
    list.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="${item.category === 'ラケット' ? 'menu-card1' : 'menu-card2'}" data-category="${item.category}">
          <img src="${item.img}" alt="${item.name}">
          <p class="name">${item.name}</p>
          <p class="price">${item.price}</p>
        </div>
      `;
      productList.appendChild(li);
    });
  }

  generateProducts(products);

  // フィルター機能
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      if (filter === "すべて") {
        generateProducts(products);
      } else {
        const filtered = products.filter(item => item.category === filter);
        generateProducts(filtered);
      }
      console.log(`${filter}カテゴリが表示されました`);
    });
  });
});


