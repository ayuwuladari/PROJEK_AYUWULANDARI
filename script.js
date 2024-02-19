function insert(num) {
    document.forms[0].textView.value = document.forms[0].textView.value + num;
  }
  
  function c() {
    document.forms[0].textView.value = "";
  }
  
  function del() {
    var x = document.forms[0].textView.value;
    document.forms[0].textView.value = x.substring(0, x.length - 1);
  }
  
  function equal() {
    var x = document.forms[0].textView.value;
    if (x === "") {
      alert("Masukkan angka terlebih dahulu");
    } else {
      document.forms[0].textView.value = eval(x);
    }
  }