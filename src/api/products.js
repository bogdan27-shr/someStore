export async function req () {
  const res = await fetch('https://fakestoreapi.com/products');
  
  if(!res.ok){
    throw new Error("Request error");
  }
  const data = await res.json();

  return data;
}