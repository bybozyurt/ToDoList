//kapat butonu oluşturma
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//silme işlemi
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"; 
    
  }
}

// okundu tiki işareti ve metin üstüne çizik atma
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//eleman ekleme
function newElement(){
  var li = document.createElement("li");
  var inputText = document.getElementById("task").value;
  // li elemanına aldığımız inputText i ekliyoruz
  var t = document.createTextNode(inputText); 
  li.appendChild(t);

  if(isEmpty(inputText)){
    $('#liveToast2').toast('show');
       
  }
  else {
    document.getElementById("list").appendChild(li);
    $('#liveToast').toast('show'); 

  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
// boş alan kontrolü yapan method
function isEmpty(str) {
  return !str.trim().length;
}








  
