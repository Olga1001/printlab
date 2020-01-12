$(function () {

    var textInput = $(".input-text")[0];
    var tmpStr = $(textInput).val();

    // Select product type

    $('li.type__selector--icon').on('click', function (e) {
        $('li.type__selector--icon').removeClass('active');
        $(this).addClass('active');
        var pr_type = $(this).attr('data-type-folder');
        var side = $('input[name=side]:checked').val();
        var type = $('.select-image-block .select-shirt.active').attr('data-color');
        $(".main-img").attr('src', 'ajax/img/product/' + side + '/' + pr_type + '/' + type + '.png');
        if (side == 'front') {
            $('.shirt-text, .shirt-number').css('display', 'none');
            $('.print-image').css('display', 'block');
        }
        if (side == 'back') {
            $('.print-image').css('display', 'none');
            $('.shirt-text, .shirt-number').css('display', 'block');
        }
        var val = $(this).attr('data-type');
        $('input[name=type]').val('');
        $('input[name=type]').val(val);
        // select price block
        if (pr_type == 'swsh') {
            $('.size-quanty-select').css('display', 'none');
            $('.sw__price-block').css('display', 'block');
        }
        if (pr_type == 'balahon') {
            $('.size-quanty-select').css('display', 'none');
            $('.bh__price-block').css('display', 'block');
        }
        if (pr_type == 'hudi') {
            $('.size-quanty-select').css('display', 'none');
            $('.hd__price-block').css('display', 'block');
        }
        if (pr_type == 'kenguru') {
            $('.size-quanty-select').css('display', 'none');
            $('.kg__price-block').css('display', 'block');
        }
        $('.uteplitel__checkbox').prop('checked', false);
        $('input[name=uteplitel]').val('');
        $('input[name=uteplitel]').val('-');
    });

    // Утеплитель
    $('.uteplitel__checkbox').on('click', function (e) {
        if ($('.uteplitel__checkbox').is(':checked')) {
            $('input[name=uteplitel]').val('');
            $('input[name=uteplitel]').val('+');
        } else {
            $('input[name=uteplitel]').val('');
            $('input[name=uteplitel]').val('-');
        }
    });

    // Select sweatshirt side

    $('input[name=side]').on('click', function (e) {
        var pr_type = $('li.type__selector--icon.active').attr('data-type-folder');
        var side = $(e.target).val();
        var type = $('.select-image-block .select-shirt.active').attr('data-color');
        $(".main-img").attr('src', 'ajax/img/product/' + side + '/' + pr_type + '/' + type + '.png');
        if (side == 'front') {
            $('.shirt-text, .shirt-number').css('display', 'none');
            $('.print-image').css('display', 'block');
        }
        if (side == 'back') {
            $('.print-image').css('display', 'none');
            $('.shirt-text, .shirt-number').css('display', 'block');
        }
    });

    // Select gender

    $('label[for=size_xxs]').css('display', 'none');

    $('#sex-man').on('click', function (e) {
        $('label[for=size_xxs]').css('display', 'none');
        $('label[for=size_xxl]').css('display', 'inline-flex');
        var val = $(this).val();
        $('input[name=gender]').val('');
        $('input[name=gender]').val(val);
    });
    $('#sex-woman').on('click', function (e) {
        $('label[for=size_xxs]').css('display', 'inline-flex');
        var val = $(this).val();
        $('input[name=gender]').val('');
        $('input[name=gender]').val(val);
    });

    // Select size

    $('input[name=mySize]').on('click', function (e) {
        var val = $(this).val();
        $('input[name=size]').val('');
        $('input[name=size]').val(val);
    });

    // Select color sweatshirt
    $('.select-shirt').each(function (index) {
        var color = $(this).attr('data-background');
        //$(this).attr('src', 'ajax/img/product/colors/' + color_number + '.png');
        $(this).attr('style', 'background:' + color + ';');
    });

    $('.select-shirt').on('click', function (e) {
        var el = $(e.target);
        var pr_type = $('li.type__selector--icon.active').attr('data-type-folder');
        var type = el.attr('data-color');
        var side = $('input[name=side]:checked').val();
        $('.select-shirt').removeClass('active');
        el.addClass('active');
        $(".main-img").each(function () {
            $(this).attr('src', 'ajax/img/product/' + side + '/' + pr_type + '/' + type + '.png');
        });

        $('input[name=sweatshirt_color]').val(type);
    });

    // Select text color

    $('.select-text-color').each(function (index) {
        //var color_number = $(this).attr('data-color-number');
        //$(this).attr('src', '/ajax/img/print-colors/' + color_number + '.png');
        var color = $(this).attr('data-color');
        $(this).attr('style', 'background:' + color + ';');
    });

    $('.select-text-color').on('click', function (e) {
        var color = $(this).attr('data-color');
        $('.select-text-color').removeClass('active');
        $(this).addClass('active');
        $('.shirt-text, .shirt-number').css('color', color);
        if ($(this).attr('data-color-number') == '20') {
            $('.shirt-text, .shirt-number').attr('style', 'color: #999da0;');
        }
        if ($(this).attr('data-color-number') == '21') {
            $('.shirt-text, .shirt-number').attr('style', 'color: #c5a036;');
        }

        var color_number = $(this).attr('data-color-number');
        $('input[name=text_color]').val(color_number);
    });

    // Select text and number font

    $('select.font_config').change(function() {
    var font = $('select.font_config option:selected').val();
        $('select.font_config option:selected').each(function() {
          font = $('select.font_config option:selected').val();
        });
    $('.shirt-text').css('font-family', font);
    $('input[name=font]').val(font);
    if (!$('#standart-number-font').is(':checked') && $('select.font_config option:selected').val() != 'DollieScript') {
        $('.shirt-number').css('font-family', font);
        $('.shirt-number').css('top', '1.5em');
        $('.shirt-number').css('font-size', '140px');
        $('input[name=standart_number]').val('нет');
    } else {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $('.shirt-number').css('font-family', 'BeTrueToYourSchool-Regular');
            $('.shirt-number').css('top', '1.2em');
            $('.shirt-number').css('font-size', '165px');
        }

        $('input[name=standart_number]').val('да');
    }
    }).trigger("change");

    $('#standart-number-font').change(function() {
        var shirt_text_font = $('select.font_config option:selected').val();
        if ($(this).is(':checked') || $('select.font_config option:selected').val() == 'DollieScript') {
            $('.shirt-number').css('font-family', 'BeTrueToYourSchool-Regular');
            $('.shirt-number').css('top', '1.2em');
            $('.shirt-number').css('font-size', '165px');
            $('input[name=standart_number]').val('да');
        } else {
            $('.shirt-number').css('font-family', shirt_text_font);
            $('.shirt-number').css('font-size', '140px');
            $('.shirt-number').css('top', '1.5em');
            $('input[name=standart_number]').val('нет');
        }
    });

    // Input text

    $('.input-text').on('keyup', function () {

        var text = $(this).val();

        $('.input-text').each(function () {
            $(this).val(text);
        });

        $('.shirt-text').each(function () {
            $(this).text(text);
        });

        if (text.length >= 12) {
            $('.shirt-text').css('font-size', '22px');
        } else if ( text.length >= 8) {
            $('.shirt-text').css('font-size', '32px');
        } else {
            $('.shirt-text').css('font-size', '45px');
        }

        $('input[name=text]').val(text);
    });

    // Input number

    $('.input-number').on('keyup', function () {

        var text = $(this).val();

        $('.input-number').each(function () {
            $(this).val(text);
        });

        $('.shirt-number').each(function () {
            $(this).text(text);
        });

        $('input[name=number]').val(text);
    });

    var clickCount = 0;

    $('.input-text').on('click', function () {
        if (clickCount++ === 0) {
            $(this).val('');
        }
    });

    // Select print

    $(".select-color-print").each(function (index) {
        //var color_number = $(this).attr('data-color-number');
        //$(this).attr('src', '/ajax/img/print-colors/' + color_number + '.png');
        var color = $(this).attr('data-color');
        $(this).attr('style', 'background:' + color + ';');
    });

    defaultPrintColor = 5;

    $(".select-print").each(function (index) {
        var dir = $(this).attr('data-dir');
        $(this).attr('src', 'https://xn--b1amsjhb4b.com/ajax/img/print/' + dir + '/' + defaultPrintColor + '.png');
    });

    $('.select-print').on('click', function (e) {
        var active_color = $('.select-color-print.active').attr('data-color-number');
        var dir = $(this).attr('data-dir');
        var print = $(e.target);
        $('.select-print').removeClass('active');
        $(this).addClass('active');
        $('.print-image').attr('src', 'https://xn--b1amsjhb4b.com/ajax/img/print/' + dir + '/' + active_color + '.png');
        $('input[name=print]').val(dir);
    });

    $('.select-color-print').on('click', function (e) {
        var color_number = $(this).attr('data-color-number');
        var print = $('.print-image').attr('src');
        var dir = $('.select-print.active').attr('data-dir');
        $('.select-color-print').removeClass('active');
        $(this).addClass('active');
        $('.print-image').attr('src', 'https://xn--b1amsjhb4b.com/ajax/img/print/' + dir + '/' + color_number + '.png');
        $('input[name=print_color]').val(color_number);
    });

    // Print category

    $('.select-print-category').on('click', function (e) {
        var print_category = $(this).attr('data-category');
        $('.select-print-category').removeClass('active');
        $(this).addClass('active');
        $('.select-print').parent().css('display', 'none');
        $('.select-print').filter(function(){
            return $(this).attr('data-category') === print_category;
        }).parent().css('display', 'block');
    });

    $('.show_all_category').on('click', function (e) {
        $('.select-print').parent().css('display', 'block');
    });

    // Price

    $('.price_radio').on('click', function (e) {
        var el = $(e.target);
        var price = el.val();
        $(el).parent('.size-quanty-select').find('.price_val').html(price);
        $('input[name=price]').val('');
        $('input[name=price]').val(price);
    });

    // Twice

    $('.twice-sweet-buy-btn').on('click', function (e) {
        var el = $(e.target);
        var number = el.attr('data_product_number');
        $('#myModal-twice input[name=place_form]').val('Парный свитшот');
        var text = $('#myModal-twice input[name=place_form]').val();
        $('#myModal-twice input[name=place_form]').val(text + ' ' + number);
    });

});