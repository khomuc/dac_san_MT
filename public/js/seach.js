// Mảng dữ liệu sản phẩm (mô phỏng dữ liệu từ cơ sở dữ liệu)
const products = [
    { id: 1, name: "Bánh mì chảo", price: 25000 },
    { id: 2, name: "Bánh pía", price: 7000 },
    { id: 3, name: "Kẹo dừa", price: 1000 },
    { id: 4, name: "Cơm tấm", price: 25000 }
];

// Hàm tìm kiếm sản phẩm
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    displayResults(searchResults);
}

// Hàm hiển thị kết quả tìm kiếm
function displayResults(results) {
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = ""; // Xóa nội dung hiện tại

    if (results.length === 0) {
        searchResultsDiv.innerHTML = "<p>Không tìm thấy kết quả.</p>";
    } else {
        results.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `<p><strong>${product.name}</strong> - Giá: ${product.price} VNĐ</p>`;
            searchResultsDiv.appendChild(productDiv);
        });
    }
}