$(document).ready(function () {
  let checkedAmenities = {};
  $(document).on('change',"input[type='checkbox']", function () {
    amenity_id = $('this').data('id);
    amenity_name = $('this').data('name');
    if (this.checked) {
      checkedAmenities[amenity_id] = amenity_name;
    } else {
      delete checkedAmenities[amenity_id];
    }
   let names = Object.values(checkedAmenities);
   if (names.length > 0) {
     $('div.amenities > h4').text(names.join(','));
   } else {
     $('div.amenities > h4').html('&nbsp;');
   }
  });
});
