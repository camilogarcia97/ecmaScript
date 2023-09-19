function solution(
  json1 = { name: "Mr.Michi", food: "Pesacdo" },
  json2 = { age: 12, color: "Blanco" }
) {
  (json1 = { name: "Mr.cat", food: "pollo" }),
    (json2 = { age: 22, color: "Gris" });
  return { ...json1, ...json2 };
}
solution();
