$(document).ready(function() {
    alert('Welcome to my page');
    $.ajax({
      url: 'https://developer.nps.gov/api/v1/parks?parkCode=zion&api_key=86eWqQ7tqaQ8Lhic9WJXRba4gHyrg5xref6B43eO',
      dataType: 'json',
      success: function(result) {
          var data = result.data

        var park = ''
        for(var i = 0; i < data.length; i++) {
            console.log(data[i].addresses[0].line1)
            
            park += "<ul class=' text-white' style='list-style-type: none;'>"
            park += "<li>Mailing Address:</li>"
            park += "<li class='name'>" + data[i].fullName + "</li>"
            park += "<li class='line1'>" + data[i].addresses[0].line1 + "</li>"
            park += "<li class='line2'>" + data[i].addresses[0].line2 + "</li>"
            park += "<li class='city'>" + data[i].addresses[0].city + ', ' + data[i].addresses[0].stateCode + ' ' + data[i].addresses[0].postalCode +   "</li>"
            park += "</ul>"
            park += "</div>"
        }
            $(".contact").append(park)
        }
      });
      $("#search").click(function() {
        $( ".rowtoggle" ).toggle(function() {
          $(".toggle").remove();
        });
      });
      $(".slide").click(function() {
        $(".slideToggle").slideDown(function(){
          $(".slide").hide(), $(".cLose").show()
        });
      });
      $(".cLose").click(function() {
        $(".slideToggle").slideUp(function(){
          $(".cLose").hide(), $(".slide").show()
        });
      });
    });  