var code = ace.edit("codeeditor");
        code.getSession().setMode("ace/mode/html");
        code.setTheme("ace/theme/xcode");
        var template = "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "   <title>Code Plus Plus : Code Editor</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "   <h1>Code Plus Plus</h1>\n" +
            "   <p>Learn Web devolopement by Example.</p>\n" +
            "\n\n\n\n\n" +
            "</body>";

        code.setValue(template);

        $(document).ready(function() {
          
            $(document).on('click', '#run', function() {
                var htmlCode = code.getValue()
                $("#output").html(htmlCode);
            });

            $(document).on('click', '#clear', function() {
                code.setValue(template);
                $("#output").html("");
            });
            var colour = 1;
            $(document).on('click', '#theme', function() {
                if (colour == 1) {
                    code.setTheme("ace/theme/monokai");
                    colour = 0;
                    $("#theme").attr("value", "Light")
                    $("#theme").removeClass("btn-dark");
                    $("#theme").addClass("btn-light");
                    $("body").css("background-color", "#white");

                } else {
                    code.setTheme("ace/theme/xcode");
                    colour = 1;
                    $("#theme").attr("value", "Dark")
                    $("#theme").removeClass("btn-light");
                    $("#theme").addClass("btn-dark");
                    $("body").css("background-color", "white");


                }

            });





        });
