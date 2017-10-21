// Built by LucyBot. www.lucybot.com

var searchTerm;
var numRecords;
var startYear;
var endYear;


$("#search").on("click", get_all_the_articles);





function get_all_the_articles() {
    searchTerm = $("#searchTerm").val();
    numRecords = $("#numRecords").val();
    startYear = $("#startYear").val();
    endYear = $("#endYear").val();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'q': searchTerm,
        // 'begin_date': 20171017,
        // 'end_date': 20171010,
        'sort': "newest",
        'page': 1,
        'api-key': "911070957e70436e8b86d093a0848275",

    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(response) {
        var article_div = $("<div>");
        var articles = response.response.docs;


        articles.forEach(function(article) {
            console.log(article);
            var art_div = $('<div class="card" style="width: 20rem;">').css("float", "left");
            var art_header = $("<img class='card-img-top'>");
            art_header.attr({
                src: "http://www.nyt.com/" + article.multimedia[1].url,
            })
            console.log(article.multimedia[1].url);
            art_div.append(art_header)
            art_div.append("<h4 class='card-title'><a href='" + article.web_url + "'>" + article.headline.main + " </h4>");

            art_div.append("<p class='card-text'>" + article.snippet + "</p>");

            $("#results").prepend(art_div);

        });



    }).fail(function(err) {
        throw err;
    })

};