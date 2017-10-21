// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "911070957e70436e8b86d093a0848275",
    'q': "patriots",
    'begin_date': "20171015",
    'end_date': "20170812",
    'sort': "newest",
    'page': 1
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(result);
}).fail(function(err) {
    throw err;
});