$(document).ready(function () { // Якщо документ загрузився

    var k = 0;
    var listener;
    $("#getPrice").click(function () {
        var collss = $('#var_x1').val();
        var rowwss = $('#var_y1').val();
        var results = document.getElementById('results');
        var m = collss * rowwss * k * 0.25;

        results.innerHTML = "<b><p> Вартість мозаїки: " + m + " грн </p></b>";
        $("#getPrice").hide(100);
        document.getElementById("field").disabled = true;
        $("#new").show(100);
    });

    $("#new").click(function () {
        k = 0;
        var results = document.getElementById('results');
        results.innerHTML = "";
        document.getElementById("field").disabled = false;
        $("#field").hide(100);
        $("#new").hide(100);
        $('#hint').show(100);
        $('#setValue').show(100);
        document.getElementById("var_a1").disabled = false;
        document.getElementById("var_b1").disabled = false;
        document.getElementById("var_x1").disabled = false;
        document.getElementById("var_y1").disabled = false;

        var results2 = document.getElementById('results3');
        results2.innerHTML = "";

        var field = document.getElementById('field');

        field.removeEventListener('click', listener, false);
    });

    $("#setValue").click(function () {

        var collss = 5;
        if ($('#var_a1').val() > 10) {
            document.getElementById('var_a1').value = "5";
        } else {
            collss = $('#var_a1').val();
        }

        
        if ($('#var_x1').val() > 120 || ($('#var_x1').val() <30)) {
            document.getElementById('var_x1').value = "50";
        } 
        if ($('#var_y1').val() > 120 || ($('#var_y1').val() <30)) {
            document.getElementById('var_y1').value = "50";
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
        var field = document.getElementById('field');

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


            field.innerHTML = "";
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
        $("#field").show(100);
        $('#hint').hide(100);
        $('#setValue').hide(100);
        $("#getPrice").show(100);
        document.getElementById("var_a1").disabled = true;
        document.getElementById("var_b1").disabled = true;
        document.getElementById("var_x1").disabled = true;
        document.getElementById("var_y1").disabled = true;



    });
});