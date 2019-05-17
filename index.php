<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <title>Dismissible Alerts</title>
        <style>
            .alert-css{
                transition: .8s;
                right: -445px;
            }
        </style>
    </head>
    <body style="overflow: hidden;">
        <div class="container">
            <h1>Hello, world!</h1>
        </div>
        <div class="alert alert-warning alert-dismissible fade show position-absolute alert-css" style="right: -445px;" role="alert">
            <h6>
                <strong>Holy guacamole!</strong>
            </h6> 
            <p>You should check in on some of those fields below.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-warning alert-dismissible fade show position-absolute alert-css" style="right: -445px;" role="alert">
            <h6>
                <strong>Holy guacamole!</strong>
            </h6> 
            <p>You should check in on some of those fields below.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-warning alert-dismissible fade show position-absolute alert-css" style="right: -445px;" role="alert">
            <h6>
                <strong>Holy guacamole!</strong>
            </h6> 
            <p>You should check in on some of those fields below.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script>
            $(document).ready(function(){
                var timeOut = 1000;
                $(".alert-css").each(function() {
                    if ($(this).prev('.alert-css').length > 0) {
                        var self = this;
                        setTimeout(function(){
                            var position = $(self).prev('.alert-css').position();
                            var top = position.top + $(self).prev('.alert-css').height() + 30;
                            $(self).css({'right':'10px','top' : top + 'px' });
                        },timeOut);
                        timeOut += timeOut;
                    }else{
                        $(this).css({'right':'10px'});
                    }
                });
                var disposeCount = $('.alert-css').length * 1000;
                $(".alert-css").each(function() {
                    var self = this;
                    setTimeout(function(){
                        $(self).alert('close');
                    }, disposeCount);
                    disposeCount +=1000;
                });
            })

        </script>
    </body>
</html>