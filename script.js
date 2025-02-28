funtion login()
{
  let a= username.value
  let b= Password.value
  if (a == "AnhThu1377" && b == "anhthu13072007")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
  else
    document.write("không hợp lệ")
}
