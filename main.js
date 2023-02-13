function displayTime() {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();
  const session = document.querySelector("#session");

  document.querySelector("#hours").innerHTML = hrs;

  document.querySelector("#minutes").innerHTML = min;

  document.querySelector("#seconds").innerHTML = sec;

  if(hrs >= 12){
    session.innerHTML = 'PM'
  }else{
    session.innerHTML = 'AM'
  }
}
setInterval(displayTime, 10);
