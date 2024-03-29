

$("#add_user").submit(function (event) {
    alert("Data Inserted Succesfully");
})

$("#update_user").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })

    console.log(data.port);

    var request = {
        "url": `https://student-management-pd2d.onrender.com/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Data Updated Successfully!");
    })

})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")
        var port = $(this).attr("name")

        console.log(port);


        var request = {
            "url": `https://student-management-pd2d.onrender.com/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully!");
                location.reload()
            })
        }

    })
}