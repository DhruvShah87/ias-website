function arrowChange(clickedId){
  if(document.getElementById(clickedId).classList.contains('notClicked')){
    //alert('not clicked!');
    document.getElementById(clickedId).classList.add('clicked');
    document.getElementById(clickedId).classList.remove('notClicked');
    for(var i=1;i<=29;i++){
      var str="option"+i;
      if(str!=clickedId){
        //alert(str);
        document.getElementById(str).classList.add('notClicked');
        document.getElementById(str).classList.remove('clicked');
      } else {
        //alert('myid');
      }
    }
  } else {
    document.getElementById(clickedId).classList.add('notClicked');
    document.getElementById(clickedId).classList.remove('clicked');
  }
}
