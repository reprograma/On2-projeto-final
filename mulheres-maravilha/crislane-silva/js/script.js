(function() {
    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");

    btnResponsivo.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
        menuResponsivo.className += " ativo";
      } else {
        menuResponsivo.className = "navegacao__itens";
      }
    });
  })();

  window.addEventListener("scroll", function() {
    if (pageYOffset >= 250) {
      document.querySelector(".navegacao").style.backgroundColor = "#674582";
      document.querySelector(".navegacao__itens").style.backgroundColor =
        "#674582";
    } else {
      document.querySelector(".navegacao").style.backgroundColor = "transparent";
      document.querySelector(".navegacao__itens").style.backgroundColor =
        "transparent";
    }
  });

  // window.addEventListener("mouseover, function() {
  //   document.getElementById("#citacao").style.fontsize = "1.8rem";
  // });


  $(function(){
    $(".autora-about").hide();
    $(".arrow-closed").hide();

    $(".arrow").click(function(){
      $(".autora-about").show("slow");
      $(".arrow").hide();
      $(".arrow-closed").show("slow");
    });

    $(".arrow-closed").click(function(){
      $(".autora-about").hide("slow");
      $(".arrow").show();
      $(".arrow-closed").hide();
    });

    $(".educacao").hide();
    $(".carreira").hide();

    $(".card-educacao").click(function(){
      $(".educacao").toggle("slow");
    });

    $(".card-carreira").click(function(){
      $(".carreira").toggle("slow");
    });

  });
