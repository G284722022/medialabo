let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

function sendRequest(){
  let id = document.getElementById('id').value.trim();
  if (id === '') {
    console.log('都市のidを入力してください');
    return;
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);      // 通信の最後の処理
}

function showResult(resp){
  let data = resp.data;
  if (typeof data === 'string'){
    data = JSON.parse(data);

  }
  let p = document.querySelector('p#lat');
  p.textContent = ("緯度: "+data.coord.lat);
  let p1 = document.querySelector('p#lon');
  p1.textContent = ("経度: "+data.coord.lon);
  let p3 = document.querySelector('p#weather');
  p3.textContent = ("天気: "+data.weather[0].description);
  let p4 = document.querySelector('p#temp_max');
  p4.textContent = ("最高気温: "+data.main.temp_max+"℃");
  let p5 = document.querySelector('p#temp_min');
  p5.textContent = ("最低気温: "+data.main.temp_min+"℃");
  let p6 = document.querySelector('p#situ');
  p6.textContent = ("湿度: "+data.main.humidity+"%");
  let p7 = document.querySelector('p#wind_speed');
  p7.textContent = ("風速: "+data.wind.speed+"m/s");
  let p8 = document.querySelector('p#wind_deg');
  p8.textContent = ("風向: "+data.wind.deg);
  let p9 = document.querySelector('p#name');
  p9.textContent = ("都市名: "+data.name); 
}
  function showError(err) {
    console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}