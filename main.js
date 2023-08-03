$(document).ready(function () {
    $("#formularioTarefa").submit(function (event) {
        event.preventDefault();
        const nomeTarefa = $("#nomeTarefa").val();
        if (nomeTarefa.trim() !== "") {
            $("#listaTarefas").append(`<li>${nomeTarefa}</li>`);
            $("#nomeTarefa").val("");
        }
    });

    $(document).on("click", "#listaTarefas li", function () {
        $(this).toggleClass("concluida");
    });
});
