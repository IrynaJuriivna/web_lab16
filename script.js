$(document).ready(function () { // Якщо документ загрузився

    var klit = 1;
    var k = 0;
    var listener;
    $("#getPrice").click(function () {
        var collss = $('#var_x1').val();
        var results = document.getElementById('results');
        var m = collss * k;

        results.innerHTML = "<b><p> Вартість мозаїки: " + m + " грн </p></b>";
        $("#getPrice").hide(100);
        if (klit == 1) {
            var field = document.getElementById('field');

            field.removeEventListener('click', listener, false);
        }
        if (klit == 2) {
            var field = document.getElementById('field2');

            field.removeEventListener('click', listener, false);
        }
        if (klit == 3) {
            var field = document.getElementById('field3');

            field.removeEventListener('click', listener, false);
        }

        $("#new").show(100);
    });

    $("#new").click(function () {
        k = 0;
        var results = document.getElementById('results');
        results.innerHTML = "";
        document.getElementById("field").disabled = false;
        document.getElementById("field2").disabled = false;
        document.getElementById("field3").disabled = false;
        $("#field").hide(100);
        $("#field2").hide(100);
        $("#field3").hide(100);
        $("#new").hide(100);
        $('#hint').show(100);
        $('#setValue').show(100);
        document.getElementById("var_a1").disabled = false;
        document.getElementById("var_b1").disabled = false;
        document.getElementById("var_x1").disabled = false;
        document.getElementById("var_y1").disabled = false;
        document.getElementById("PlSize").disabled = false;

        var results2 = document.getElementById('results3');
        results2.innerHTML = " ";
        document.getElementById('results3').disabled = true;


    });

    $("#setValue").click(function () {

        document.getElementById('results3').disabled = false;
        if ($('#PlSize').val() == 1) {
            klit = 1;
        }
        if ($('#PlSize').val() == 2) {
            klit = 2;
        }
        if ($('#PlSize').val() == 3) {
            klit = 3;
        }
        console.log(klit);

        var collss = 5;
        if ($('#var_a1').val() > 10) {
            document.getElementById('var_a1').value = "5";
        } else {
            collss = $('#var_a1').val();
        }



        var rowwss = 5;

        if ($('#var_b1').val() > 10) {
            document.getElementById('var_b1').value = "5";
        } else {
            rowwss = $('#var_b1').val();
        }

        var field_mas = [];


        for (var i = 0; i < rowwss; i++) {
            field_mas[i] = [];
            //     console.log("field"+i);
            for (var j = 0; j < collss; j++) {
                field_mas[i][j] = 0;
                //         console.log("field"+i+":"+j);
            }
        }

        var rez;
        var results = document.getElementById('results3');
        var field;
        if (klit == 1) {
            field = document.getElementById('field');
        }
        if (klit == 2) {
            field = document.getElementById('field2');
        }
        if (klit == 3) {
            field = document.getElementById('field3');
        }


        var gen_row = "";
        var gen_cols = "";

        draw_table();
        listener = function (e) {
            var target = e.target;

            if (target.tagName === 'TD') {

                if (field_mas[target.id[0]][target.classList[0]] == 1) {
                    field_mas[target.id[0]][target.classList[0]] = 0;
                    k--;
                } else {
                    field_mas[target.id[0]][target.classList[0]] = 1;
                    k++;
                }
                draw_table();
            }

        }
        field.addEventListener('click', listener, false);

        function draw_table() {


            if (klit == 1) {
                field.innerHTML = "";
            }
            if (klit == 2) {
                field.innerHTML = "";
            }
            if (klit == 3) {
                field.innerHTML = "";
            }

            for (var i = 0; i < rowwss; i++) {
                gen_row = document.createElement('tr');
                gen_row.className = "getn-tr";
                gen_cols = "";



                for (var j = 0; j < collss; j++) {
                    gen_cols += "<td id = '" + i + "' class = '" + j;


                    if (field_mas[i][j]) { } else {
                        gen_cols += " empty'";
                    }
                    gen_cols += " height='" + $('#var_x1').val() + "px ' "; gen_cols += " width='" + $('#var_y1').val() + "px ' ";

                    gen_cols += ">" + "</td>";


                }


                gen_row.innerHTML = gen_cols;
                field.appendChild(gen_row);
            }




            //      rez = 'Маємо ' + k;
            results.innerHTML = "";
            results.innerHTML = "Кількість плиточок: " + k;

        }
        if (klit == 1) {
            $("#field").show(100);
        }
        if (klit == 2) {
            $("#field2").show(100);
        }
        if (klit == 3) {
            $("#field3").show(100);
        }


        $('#hint').hide(100);
        $('#setValue').hide(100);
        $("#getPrice").show(100);
        document.getElementById("var_a1").disabled = true;
        document.getElementById("var_b1").disabled = true;
        document.getElementById("var_x1").disabled = true;
        document.getElementById("var_y1").disabled = true;
        document.getElementById("PlSize").disabled = true;



    });
});