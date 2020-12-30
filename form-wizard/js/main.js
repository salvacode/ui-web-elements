"use strict";
!(function (a) {
    ({
        Constants: { FORM_WIZARD_NEXT_SELECTOR: ".btn-next", FORM_WIZARD_PREVIOUS_SELECTOR: ".btn-previous" },
        CssClasses: { FORM_GROUP: "form-group", FORM_CONTROL: "form-control", FORM_WIZARD: "form-wizard", FORM_WIZARD_TAB: "steps" },
        init: function () {
            (this.$form = a("." + this.CssClasses.FORM_WIZARD)),
                (this.$passwordToggler = a('[name="password_toggler"]')),
                (this.$passwordWrapper = this.$passwordToggler.closest("." + this.CssClasses.FORM_GROUP)),
                (this.$passwordInput = this.$passwordWrapper.find("." + this.CssClasses.FORM_CONTROL)),
                this.createFormWizard().bindEvents();
        },
        bindEvents: function () {
            this.$passwordToggler.on("change.e.app", this.handlePasswordToggle.bind(this));
        },
        handlePasswordToggle: function (a) {
            this.$passwordToggler.is(":checked")
                ? this.$passwordInput.attr("type", "text").attr("autocapitalize", "off").attr("autocomplete", "off").attr("autocorrect", "off").attr("spellcheck", "false")
                : this.$passwordInput.attr("type", "password"),
                this.$passwordInput.focus();
        },
        createFormWizard: function () {
            var a = this.getFormWizardOptions();
            return (a.onNext = this.formWizardNextHandler.bind(this)), (a.onTabClick = this.formWizardTabClickHandler.bind(this)), this.$form.bootstrapWizard(a), this;
        },
        formWizardNextHandler: function (a, b, c) {
            return this.$form.valid();
        },
        formWizardTabClickHandler: function (a, b, c) {
            return !0;
        },
        getCreateOptions: function (b, c) {
            var d = new RegExp("^" + b + "(_)?", "i"),
                e = {};
            return (
                a.each(this, function (b, f) {
                    a.isPlainObject(f) &&
                        a.each(f, function (f, g) {
                            d.test(f) && ((f = f.replace(d, "").replace(/_/g, "-")), (f = a.camelCase(f.toLowerCase())), (c && c(e, b, f, g)) || (e[f] = g));
                        });
                }),
                e
            );
        },
        getFormWizardOptions: function () {
            return this.getCreateOptions("form_wizard", function (a, b, c, d) {
                return (c = "CssClasses" === b ? c + "Class" : c), (a[c] = d);
            });
        },
    }.init());
})(jQuery);
