const allbtn = document.getElementsByClassName('add-btn');

for (const btn of allbtn) {
   btn.addEventListener('click', function (events) {
      const name = events.target.parentNode.childNodes[1].innerText;
      const price = events.target.parentNode.childNodes[3].childNodes[1].innerText;

      const category = events.target.parentNode.childNodes[5].innerText;
      // Apepend place
      const placeContainar = document.getElementById('selected-players-container');
      // ..................................
      // card limite
      const cartCount2 = getConvertedValue('cart');
      const leftCount2 =getConvertedValue('left')
      if(cartCount2 === 6 || leftCount2 === 0){
         alert('limits are end');
         return;
      }
        // buton disable attribute
        events.target.setAttribute('disabled',true);
        events.target.parentNode.style.background ='gray';
      // update budget
      const budget =getConvertedValue('budget');
      document.getElementById('budget').innerText =budget-parseInt(price);
      // card count
      const cartCount =getConvertedValue('cart');
      console.log(cartCount);
      document.getElementById('cart').innerText=cartCount + 1;
      // leftCount
      const leftCount = getConvertedValue('left');
      document.getElementById('left').innerText = leftCount - 1;
      // ................................................
   
      // creating tag
      const div = document.createElement('div');
      // adding a class
      div.classList.add('selected-players')
      // creating tag
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      // inner text in tag
      p1.innerText = name;
      p2.innerText = price;
      p3.innerText = category;

      // append elements
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);

      placeContainar.appendChild(div);
      updatedTotalCost(price);
      updateGrandTotal()
   })

}
//  grand totalcost
function updateGrandTotal(events) {
   const totalCost = getConvertedValue('total-cost')
   if(events == undefined){
      const totalCost = getConvertedValue('total-cost');
      document.getElementById('grand-total').innerText=totalCost;
   }
   else{
      const couponCode =document.getElementById('coupon-code').value;
      if(couponCode === 'love420'){
         const discount = totalCost * 0.2;
         document.getElementById('grand-total').innerText =totalCost - discount;
      }
      else
      {
         alert("please enter valid code");
      }

      
   }
}
// tottal cost
function updatedTotalCost(price) {
   const totalCost = getConvertedValue('total-cost')
   const convertedPrice = parseInt(price);
   const sum = totalCost + convertedPrice;
   document.getElementById('total-cost').innerText = sum;


}

function getConvertedValue(id) {
   const price = document.getElementById(id).innerText;
   const convertedPrice = parseInt(price);
   return convertedPrice;

}