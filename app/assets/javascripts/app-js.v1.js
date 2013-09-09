
!function(b) {
    
    var e = !!("placeholder"in document.createElement("input"));
    b.fn.placeholder = function() {
        return e ? this : this.each(function() {
            var a = b(this), c = new d(a);
            c.show(!0);
            a.focus(function() {
                c.hide()
            });
            a.blur(function() {
                c.show(!1)
            });
            b.browser.msie && (b(window).load(function() {
                a.val() && a.removeClass("placeholder");
                c.show(!0)
            }), a.focus(function() {
                if (this.value == "") {
                    var a = this.createTextRange();
                    a.collapse(!0);
                    a.moveStart("character", 0);
                    a.select()
                }
            }))
        })
    }
}(window.jQuery);

!function($) {
    $(function() {
        $('input[placeholder], textarea[placeholder]').placeholder();
        $("[data-toggle=popover]").popover();
        $(document).on('click', '.popover-title .close', function(e) {
            var $target = $(e.target), $popover = $target.closest('.popover').prev();
            $popover && $popover.popover('hide');
        });
        $("[data-toggle=tooltip]").tooltip();
        $(document).on('click', '[data-toggle^="class"]', function(e) {
            e && e.preventDefault();
            var $this = $(e.target), $class, $target;
            !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
            $class = $this.data()['toggle'].split(':')[1];
            $target = $($this.data('target') || $this.attr('href'));
            $target.toggleClass($class);
            $this.toggleClass('active');
        });
        $(document).on('click', '.panel-toggle', function(e) {
            e && e.preventDefault();
            var $this = $(e.target), $class = 'panel-collapse', $target;
            if (!$this.is('a'))
                $this = $this.closest('a');
            $target = $this.closest('.panel');
            $target.toggleClass($class);
            $this.toggleClass('active');
        });
      
        $(document).on('click.button.data-api', '[data-loading-text]', function(e) {
            var $this = $(e.target);
            $this.is('i') && ($this = $this.parent());
            $this.button('loading');
        });
      
       
        var $window = $(window);
        var mobile = function(option) {
            if (option == 'reset') {
                $('[data-toggle^="shift"]').shift('reset');
                return;
            }
            scrollToTop();
            $('[data-toggle^="shift"]').shift('init');
        };
        $window.width() < 768 && mobile();
        $window.resize(function() {
            $window.width() < 767 && mobile();
            $window.width() >= 768 && mobile('reset');
        });
        var isRgbaSupport = function() {
            var value = 'rgba(1,1,1,0.5)', el = document.createElement('p'), result = false;
            try {
                el.style.color = value;
                result = /^rgba/.test(el.style.color);
            } catch (e) {
            }
            el = null;
            return result;
        };
        var toRgba = function(str, alpha) {
            var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches = patt.exec(str);
            return"rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + alpha + ")";
        };
      
       
        var updatePie = function($that) {
            var $this = $that, $text = $('span', $this), $oldValue = $text.html(), $newValue = Math.round(100 * Math.random());
            $this.data('easyPieChart').update($newValue);
            $({v: $oldValue}).animate({v: $newValue}, {duration: 1000, easing: 'swing', step: function() {
                    $text.text(Math.ceil(this.v));
                }});
        };
        $('.easypiechart').each(function() {
            var $barColor = $(this).data("barColor") || function($percent) {
                $percent /= 100;
                return"rgb(" + Math.round(255 * (1 - $percent)) + ", " + Math.round(255 * $percent) + ", 125)";
            }, $trackColor = $(this).data("trackColor") || "#c8d2db", $scaleColor = $(this).data("scaleColor"), $lineWidth = $(this).data("lineWidth") || 12, $size = $(this).data("size") || 130, $animate = $(this).data("animate") || 1000;
            $(this).easyPieChart({barColor: $barColor, trackColor: $trackColor, scaleColor: $scaleColor, lineCap: 'butt', lineWidth: $lineWidth, size: $size, animate: $animate, onStop: function() {
                    var $this = this.$el;
                    $this.data("loop") && setTimeout(function() {
                        $this.data("loop") && updatePie($this)
                    }, 2000);
                }});
        });
        $(document).on('click', '[data-toggle^="class:pie"]', function(e) {
            e && e.preventDefault();
            var $btn = $(e.target), $loop = $('[data-loop]').data('loop'), $target;
            !$btn.data('toggle') && ($btn = $btn.closest('[data-toggle^="class"]'));
            $target = $btn.data('target');
            !$target && ($target = $btn.closest('[data-loop]'));
            $target.data('loop', !$loop);
            !$loop && updatePie($('[data-loop]'));
        });
        $(".combodate").each(function() {
            $(this).combodate();
        });
        $('.dropfile').each(function() {
            var $dropbox = $(this);
            if (typeof window.FileReader === 'undefined') {
                $('small', this).html('File API & FileReader API not supported').addClass('text-danger');
                return;
            }
            this.ondragover = function() {
                $dropbox.addClass('hover');
                return false;
            };
            this.ondragend = function() {
                $dropbox.removeClass('hover');
                return false;
            };
            this.ondrop = function(e) {
                e.preventDefault();
                $dropbox.removeClass('hover').html('');
                var file = e.dataTransfer.files[0], reader = new FileReader();
                reader.onload = function(event) {
                    $dropbox.append($('<img>').attr('src', event.target.result));
                };
                reader.readAsDataURL(file);
                return false;
            };
        });
    });
}(window.jQuery);