const fetchCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
    return coins;
}

const showCoins = async () =>  {
  const coins = await fetchCoins()
  let ul = document.getElementById('ul');
  coins
  .filter((coin, i) => i < 10)
  .forEach(({ name, symbol }) => {
    let li = document.createElement('li');
    li.innerText = `${name} (${symbol})`
    ul.appendChild(li);
  });
}

window.onload = () => showCoins()