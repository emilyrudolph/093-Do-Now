let menuItems = ["pizza", "burger", "fries", "salad"];
for (let list of menuItems){
   console.log (list);
   $(".menu").append ("<li>"+ list + "</li>");
}
