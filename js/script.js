

function Search() {
    var title = document.getElementById('searchBar').value;
    $.get('http://www.omdbapi.com/?apikey=7ed1e845&s=' + title, function (data) {
        if (data.Response == "True") {
            console.log(data);
            $('#data').html("");
            $.each(data, function (index, element) {
                for (var i = 0; i < data.Search.length; i++) {
                    $('#data').append($(
                        '<div class="col-md-4">' +
                        '<div class= "card mb-4 box-shadow" >' +
                        '<img src="' + data.Search[i].Poster + '" alt="" style="height:348px;">' +
                        '<div class="card-body">' +
                        '<p class=""></p>' +
                        '<div >' +
                        '<a class="d-flex justify-content-between align-items-center" href="https://www.google.com.tr/search?hl=tr&tbm=vid&ei=P1NQW8iIIcSasgGMtojICQ&q=' + data.Search[i].Title + '">' +
                        '<div class="btn-group">' +
                        '<h6 style="margin:0;">' + data.Search[i].Title + '</h6>' +
                        '</div>' +
                        '<small class="text-muted">' + data.Search[i].Year + '</small>' +
                        '</div>' +
                        '</a>' +
                        '</div>' +
                        '</div>' +
                        '</div > ', {
                            text: data.Title
                        }));
                }
            });
        }
        else {
            console.log(data);
            $('#data').html("");
            $('#data').append($('<h4 style="margin: 0 auto;">' + data.Error + '</h4>'))
        }
    });
}