function show_search_advance()
{
    var a = document.getElementById('show_search_advance');
    var category = document.getElementById('search_advance');
    var text = a.innerHTML;
    if (text == 'Tìm kiếm nâng cao'){
        category.style.display = "table-row";
        a.innerHTML = "Bỏ tìm kiếm nâng cao";
    }
    else{
        category.style.display = "none";
        a.innerHTML = "Tìm kiếm nâng cao";
    }
    return false;
}