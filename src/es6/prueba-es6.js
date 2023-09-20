function solution(
  json1 = { name: "Mr.Michi", food: "Pesacdo" },
  json2 = { age: 12, color: "Blanco" }
) {
  return { ...json1, ...json2 };
}
console.log(solution());