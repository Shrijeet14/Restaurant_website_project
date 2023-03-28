 // <!--script on the list -->
 var listbox2 = document.getElementById('listbox2');
 var checkedlist = document.getElementById('orders');

 listbox2.addEventListener('change', function (e) {
     var listItem = e.target.closest('li');
     var checkbox = listItem.querySelector('input[type="checkbox"]');
     var label = listItem.querySelector('label');

     if (checkbox.checked) {
         label.style.fontSize = '40%';
         listbox2.removeChild(listItem);
         checkedlist.appendChild(listItem);
         checkedlist.style.lineHeight = '80%';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '5px 0';
         }
     } 
     else {
         label.style.fontSize = '';       
         checkedlist.removeChild(listItem);
         listbox2.appendChild(listItem);
         checkedlist.style.lineHeight = '';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '';
         }
     }
 });
 var listbox1 = document.getElementById('listbox1');
 var checkedlist = document.getElementById('orders');

 listbox1.addEventListener('change', function (e) {
     var listItem = e.target.closest('li');
     var checkbox = listItem.querySelector('input[type="checkbox"]');
     var label = listItem.querySelector('label');

     if (checkbox.checked) {
         label.style.fontSize = '40%';
         listbox1.removeChild(listItem);
         checkedlist.appendChild(listItem);
         checkedlist.style.lineHeight = '80%';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '5px 0';
         }
     } else {
         label.style.fontSize = '';
         checkedlist.removeChild(listItem);
         listbox1.appendChild(listItem);
         checkedlist.style.lineHeight = '';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '';
         }
     }
 });

 var listbox3 = document.getElementById('listbox3');
 var checkedlist = document.getElementById('orders');
 listbox3.addEventListener('change', function (e) {

     var listItem = e.target.closest('li');
     var checkbox = listItem.querySelector('input[type="checkbox"]');
     var label = listItem.querySelector('label');

     if (checkbox.checked) {
         label.style.fontSize = '40%';
         listbox3.removeChild(listItem);
         checkedlist.appendChild(listItem);
         checkedlist.style.lineHeight = '80%';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '5px 0';
         }
     } else {
         label.style.fontSize = '';
         checkedlist.removeChild(listItem);
         listbox3.appendChild(listItem);
         checkedlist.style.lineHeight = '';
         var checkedlistItems = checkedlist.querySelectorAll('li');
         for (var i = 0; i < checkedlistItems.length; i++) {
             checkedlistItems[i].style.padding = '';
         }
     }
 });
 // script on marquee
 var listbox1 = document.getElementById('listbox1');
 var marquee1 = document.getElementById('listbox1-marquee');

 listbox1.addEventListener('click', function () {
     marquee1.stop();
     setTimeout(function () {
         marquee1.start();
     }, 3000); // Resume scrolling after 1 second
 });
 var listbox2 = document.getElementById('listbox2');
 var marquee2 = document.getElementById('listbox2-marquee');

 listbox2.addEventListener('click', function () {
     marquee2.stop();
     setTimeout(function () {
         marquee2.start();
     }, 3000); // Resume scrolling after 1 second
 });
 var listbox3 = document.getElementById('listbox3');
 var marquee3 = document.getElementById('listbox3-marquee');

 listbox3.addEventListener('click', function () {
     marquee3.stop();
     setTimeout(function () {
         marquee3.start();
     }, 3000); // Resume scrolling after 1 second
 });