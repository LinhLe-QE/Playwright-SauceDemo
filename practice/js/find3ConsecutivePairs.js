function findThreeConsecutivePairs(cards) {
    // Đếm số lượng từng giá trị
    let cardCount = {};
    cards.forEach(card => {
        let value = getCardValue(card);
        cardCount[value] = (cardCount[value] || 0) + 1;
    });
    console.log(cardCount);
    // Lọc ra các giá trị có ít nhất một đôi
    let pairs = Object.keys(cardCount)
        .map(Number)
        .filter(value => cardCount[value] >= 2)
        .sort((a, b) => a - b); // Sắp xếp tăng dần
    console.log(pairs);

    // Tìm ba đôi liên tiếp
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i] + 1 === pairs[i + 1] && pairs[i + 1] + 1 === pairs[i + 2]) {
            return [[pairs[i], pairs[i]], [pairs[i + 1], pairs[i + 1]], [pairs[i + 2], pairs[i + 2]]];
        }
    }

    return null; // Không tìm thấy ba đôi thông
}

// Hàm chuyển đổi ký hiệu quân bài thành giá trị số (A=1, 2-10, J=11, Q=12, K=13)
function getCardValue(card) {
    let valueMap = { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 };
    return valueMap[card] || parseInt(card);
}

// Ví dụ chạy thử
let deck = ["1", "2", "2", "J", "J", "Q", "Q", "K", "K", "A", "A"];
console.log(findThreeConsecutivePairs(deck)); 
