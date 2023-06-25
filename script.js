$(document).ready(function () {
    $("#anota-btn").click(function () {
        $("#formulario-modal").css("display", "block");
    });


    $(".cerrar").click(function () {
        $("#formulario-modal").css("display", "none");
    });

    $("body").css("background-image", "url('img/fondoHojaDef.png')");
    $("body").css("background-size", "cover");
    $("body").css("background-repeat", "no-repeat");

    $("#formulario").submit(function (event) {
        event.preventDefault();

        let fecha = $("#fecha").val();;
        let recordatorio = $("#recordatorio").val();
        let card = '<div class= "card">' + '<div class="card-header">' + '<p class="card-fecha">' + fecha + '</p>' + '</div>' + '<div class ="card-body">' + '<p class="card-recordatorio">' + recordatorio + '</p>' + '</div>' + '<div class="card-footer">' + '<div class="card-botones">' +
            '<img class="editar-btn" src="img/editarBeige.png" alt="Editar">' +
            '<img class="borrar-btn" src="img/eliminarDefinitivo.png" alt="Borrar">' + '</div>' + '</div>' + '</div>';


        $("#recordatorios-container").append(card);

        localStorage.setItem("fecha", fecha);
        localStorage.setItem("recordatorio", recordatorio);


        $("#fecha").val("");
        $("#recordatorio").val("");
        $("#formulario-modal").css("display", "none");

        



    });

    $(document).on("click", ".editar-btn", function () {
        let card = $(this).parent().parent().parent();
        let fecha = card.find(".card-header p:nth-child(1)").text().replace("Fecha: ", "");
        let recordatorio = card.find(".card-body p:nth-child(1)").text().replace("Recordatorio: ", "");
        $("#fecha").val(fecha);
        $("#recordatorio").val(recordatorio);
        card.remove();
        $("#formulario-modal").css("display", "block");

    });

    $(document).on("click", ".borrar-btn", function () {
        $(this).parent().parent().parent().remove();


    });


    $("#borrar-todo-btn").click(function () {

        let confirmacion = confirm("¿Estás seguro que deseas eliminar todo?");

        if (confirmacion) {

            $(".card").remove();

            localStorage.clear();
        }
    });


    $(".icono-info").on("click", function () {
        $("#popup-container").css("display", "flex");
    });

    $("#cerrar-popup").on("click", function () {
        $("#popup-container").css("display", "none");
    });



});