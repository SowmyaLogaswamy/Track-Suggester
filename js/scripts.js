$(document).ready(function() {
  $("#tracksuggesterform").submit(function(event) {
    if($("#interest").val()==="choose" || $("#skills").val()==="choose" || $("#job").val()==="choose")
    {
      alert("SORRY!! YOU HAVE MISSED OUT TO FILL IN A TEXT BOX!");
    }
    var name=$("#name").val();
    var interest=$("#interest").val();
    var skills=$("#skills").val();
    var experience=$("input:radio[name=experience]:checked").val();
    var job=$("#job").val();
    if(interest==="design" && skills==="designing" && job==="designer")
      {
        $("#trackname").hide();
        $("#abouttrack").hide();
        $("#trackname").text("CSS/Design");
        $("#abouttrack").text(name + "," + " HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications");
        $("#trackname").delay(100).slideToggle(500);
        $("#abouttrack").delay(100).slideToggle(500);
      }
    else if(interest==="applications" && skills==="newlanguages" && job==="developer")
      {
        $("#trackname").text("Ruby on Rails");
        $("#abouttrack").text(name + "," + " Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly.Though each language has its niche, there is plenty of crossover. For example, Rails' popularity inspired copycats in just about every language, and so you'll see interactive web applications written in C#, Java, and PHP, with Rails-like frameworks including .NET MVC, Spring, and Laravel. Even at one company, you might find them using PHP for their marketing site, Ruby for their web application, and Java for their back-end processing.");
        $("#trackname").delay(250).fadeIn(250);
        $("#abouttrack").delay(250).fadeIn(250);
      }
    else if(interest==="animation" && skills==="games" && job==="gamer")
    {
      $("#trackname").text("Java");
      $("#abouttrack").text(name + "," + " Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.");
      $("#trackname").delay(250).fadeIn(500);
      $("#abouttrack").delay(250).fadeIn(500);
    }
    else if(interest==="design" && skills==="newlanguages" && job==="gamer")
    {
      $("#trackname").text("Ruby on Rails");
      $("#abouttrack").text(name + "," + " Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly.                                     Though each language has its niche, there is plenty of crossover. For example, Rails' popularity inspired copycats in just about every language, and so you'll see interactive web applications written in C#, Java, and PHP, with Rails-like frameworks including .NET MVC, Spring, and Laravel. Even at one company, you might find them using PHP for their marketing site, Ruby for their web application, and Java for their back-end processing.");
      $("#trackname").delay(100).fadeOut(250);
      $("#abouttrack").delay(100).fadeOut(250);
    }
    event.preventDefault();
  });
    $("#clearbutton").click(function() {
    $("#name").val("");
    $("#interest").val("");
    $("#skills").val("");
    $("#experience").val("");
    $("#job").val("");
    $("#trackname").hide();
    $("#abouttrack").hide();
  });
});
