new Vue({
    el: '#iletisimForm',
    data: {
        name: '',
        email: '',
        message: '',
        submitted: false
    },
    methods: {
        
        submitForm() {
            if (!this.validateForm()) {
                return;
            }

            

            this.submitted = true;
            this.redirectToResultPage();
        },
        validateForm() {
            if (this.name.trim() === '') {
                alert('Lütfen isim girin');
                return false;
            }

            if (!this.validateEmail(this.email)) {
                alert('Lütfen geçerli bir e-posta adresi girin');
                return false;
            }

            if (this.message.trim() === '') {
                alert('Lütfen bir mesaj girin');
                return false;
            }

            return true;
        },
        validateEmail(email) {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailRegex.test(email);
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = '';
            this.submitted = false;
        },
        redirectToResultPage() {
            // Form bilgilerini başka bir sayfada göstermek için yönlendirme yapabilirsiniz
            window.location.href = 'iletisimCıktı.html' + '?name=' + encodeURIComponent(this.name) + '&email=' + encodeURIComponent(this.email) + '&message=' + encodeURIComponent(this.message);
        }
    }
});






