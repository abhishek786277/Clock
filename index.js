setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const jsec = date.getSeconds();
  // console.log(date);
  const hour = document.querySelector("#hour")
  const min = document.querySelector("#minute")
  const sec = document.querySelector("#second")
  hour.style.rotate = `${15*hours}deg`
  min.style.rotate = `${(6*mins)}deg`
  sec.style.rotate = `${(6*jsec)}deg`
  // console.log(min);

}, 1000);
