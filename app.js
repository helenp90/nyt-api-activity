// Built by LucyBot. www.lucybot.com

var searchTerm;
var numRecords;
var startYear;
var endYear;


$("#search").on("click", function() {
    searchTerm = $("#searchTerm").val();
    numRecords = $("#numRecords").val();
    startYear = $("#startYear").val();
    endYear = $("#endYear").val();
});



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    // 'api-key': "911070957e70436e8b86d093a0848275",
    // 'q': searchTerm,
    // 'begin_date': startYear,
    // 'end_date': endYear,
    // 'sort': "newest",
    // 'page': 1
    'api-key': "911070957e70436e8b86d093a0848275",
    'q': "patriots"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(response) {
    var article_div = $("<div>");
    var articles = response.response.docs;


    articles.forEach(function(article) {
        var art_div = $("<div>");
        console.log(article.headline.main);
        art_div.append("<h1>" + article.headline.main + "</h1>");
        art_div.append("<p>" + article.snippet + "</p>");
        $("#results").prepend(art_div);

    });



}).fail(function(err) {
    throw err;
});