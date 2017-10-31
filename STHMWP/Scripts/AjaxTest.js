var dataCollectionInterval = null;

function startDataCollection() {

    $("#startDC").fadeOut(function () {});
    $("#stopDC").fadeIn();

    dataCollectionInterval = setInterval(function () {
       
        collectData();
    }, 10000);
}

function collectData() {
    $.getJSON("http://sjm-web.mooo.com:10080",
        function (result) {
            //alert(result);
            var resultJSON = JSON.stringify(result);

            $("#ajaxResponse").text(resultJSON);

            //alert(resultJSON);

            if (resultJSON != "") {

                $.post("http://sjm-web.mooo.com:10081/receiveData", result,
                    function (data, status) {
                        $("#ajaxResponse").text($("#ajaxResponse").text() + "\r\nData: " + data + "\r\nStatus: " + status);
                        //alert("Data: " + data + "\nStatus: " + status);
                    });
            }

            //$.each(result, function (i, field) {
            //    $("div").append(field + " ");
            //});
        });
}

function stopDataCollection() {
    // clear interval here
    clearInterval(dataCollectionInterval);
    $("#stopDC").fadeOut();
    $("#startDC").fadeIn();
}

    //$.post("http://sjm-web.mooo.com:10081/receiveData",
    //    {
    //        deviceid: "0723ec9a-e52d-45e6-b671-2e25c9160c3c",
    //        temp: "22.80",
    //        humi: "65.60",
    //        date: "2017/10/24",
    //        time: "18:12:19"
    //    },
    //    function (data, status) {
    //        alert("Data: " + data + "\nStatus: " + status);
    //    });