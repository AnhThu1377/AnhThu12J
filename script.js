funtion login()
{
  let a= username.value
  let b= Password.value
  if (a == "athuwn" && b == "1234")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block";
  }
  else
    document.write("không hợp lệ")
}
