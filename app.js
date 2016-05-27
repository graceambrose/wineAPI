$(document).ready(function() {

    $.ajax({
      type: "GET",
      url: "https://myapi.profstream.com/api/02798c/wines",
      success: function(wines){
        console.log(wines);
        console.log(wines[0].name + ", made in " + wines[0].year + " from " + wines[0].grapes + " grapes from " + wines[0].country + ", is described as follows: " + wines[0].description)

        console.log(wines[1].name + ", made in " + wines[1].year + " from " + wines[1].grapes + " grapes from " + wines[1].country + ", is described as follows: " + wines[1].description)

        console.log(wines[2].name + ", made in " + wines[2].year + " from " + wines[2].grapes + " grapes from " + wines[2].country + ", is described as follows: " + wines[2].description)

        console.log(wines[3].name + ", made in " + wines[3].year + " from " + wines[3].grapes + " grapes from " + wines[3].country + ", is described as follows: " + wines[3].description)

        console.log(wines[4].name + ", made in " + wines[4].year + " from " + wines[4].grapes + " grapes from " + wines[4].country + ", is described as follows: " + wines[4].description)

        console.log(wines[5].name + ", made in " + wines[5].year + " from " + wines[5].grapes + " grapes from " + wines[5].country + ", is described as follows: " + wines[5].description)

        console.log(wines[6].name + ", made in " + wines[6].year + " from " + wines[6].grapes + " grapes from " + wines[6].country + ", is described as follows: " + wines[6].description)

        console.log(wines[7].name + ", made in " + wines[7].year + " from " + wines[7].grapes + " grapes from " + wines[7].country + ", is described as follows: " + wines[7].description)

      },

      error: function(){
        alert("Error getting data")
      }
    });
});
