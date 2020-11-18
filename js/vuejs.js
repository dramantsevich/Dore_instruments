var models = [
    { name: "Jupiter JCL631 B♭ Clarinet Outfit", cost: 29.95, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-1.jpg" },
    { name: "Buffet B12 B♭ Clarinet Outfit", cost: 28.35, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-2.jpg" },
    { name: "Yamaha YCL250 B♭ Clarinet Outfit", cost: 16.99, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-3.jpg" },
    { name: "Buffet E11 B♭ Wooden Clarinet Hire", cost: 25.33, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-4.jpg" },
    { name: "Trevor James Alphasax Alto Saxophone", cost: 20.99, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-5.jpg" },
    { name: "John Packer JP041 Alto Saxophone", cost: 23.69, amount: '0', inBasket: false, img: "http://localhost/cms/wp-content/themes/books-for-programmer/img/wind-6.jpg" }
];

var check = false;

var sortByPrice = function (d1, d2) { return (d1.cost > d2.cost) ? 1 : -1; };
var VueObject = new Vue({
    el: '#app',
    data: {
        models: models
    },
    computed: {
        totalcost: function () {
            totalcost = 0;
            for (model of this.models) {
                totalcost += model.amount * model.cost;
            }
            return totalcost;
        },
        amounts: function () {
            amounts = 0;
            for (model of this.models) {
                if (model.inBasket)
                    amounts ++;
            }
            return amounts;
        },
        sortedList() {
            return this.models.sort(this.models.price);
        }
    },
    methods: {
        Add: function (model) {
            if (model.amount >= 0) {
                check = true;
                model.amount = 1;
                model.inBasket = true;
            }
        },

        Pay: function () {

            for (model of this.models) {
                model.amount = '0';
                model.inBasket = false;
            }

            if(check == false){
                alert('Cart is empty');
            }else{
                alert('Thanks for paying');
                check = false;
            }
        },

        Delete: function (model) {
            model.amount = '0';
            model.inBasket = false;
                    }
    }
});


$(document).ready(function () {
    $("#wind").click(function () {
        $(".wind").show(function(){
            var windModels = [
                { name: "Jupiter JCL631 B♭ Clarinet Outfit", cost: 29.95, amount: '0', inBasket: false, img: 'img/wind-1.jpg' },
                { name: "Buffet B12 B♭ Clarinet Outfit", cost: 28.35, amount: '0', inBasket: false, img: 'img/wind-2.jpg' },
                { name: "Yamaha YCL250 B♭ Clarinet Outfit", cost: 16.99, amount: '0', inBasket: false, img: 'img/wind-3.jpg' },
                { name: "Buffet E11 B♭ Wooden Clarinet Hire", cost: 25.33, amount: '0', inBasket: false, img: 'img/wind-4.jpg' },
                { name: "Trevor James Alphasax Alto Saxophone", cost: 20.99, amount: '0', inBasket: false, img: 'img/wind-5.jpg' },
                { name: "John Packer JP041 Alto Saxophone", cost: 23.69, amount: '0', inBasket: false, img: 'img/wind-6.jpg' }
            ];
            for(var i = 0; i < 6; i++){
                Vue.set(VueObject.models, i, windModels[i]);
            }
        });
        $(".string").hide();
        $(".percussion").hide();
        $(".keyboard").hide();
    });

    $("#string").click(function () {
        $(".wind").hide();
        $(".string").show(function(){
            var stringModels = [
                { name: "Donner dad Acoustic guitar", cost: 29.95, amount: '0', inBasket: false, img: 'img/string-1.jpg' },
                { name: "Yamaha F310 Acoustic guitar", cost: 28.35, amount: '0', inBasket: false, img: 'img/string-2.jpg' },
                { name: "Admira Alba 1/2 Size Classical Guitar", cost: 16.99, amount: '0', inBasket: false, img: 'img/string-3.jpg' },
                { name: "Squier Precision Bass PJ", cost: 25.33, amount: '0', inBasket: false, img: 'img/string-4.jpg' },
                { name: "Squier Strat Mini Electric Guitar", cost: 20.99, amount: '0', inBasket: false, img: 'img/string-5.jpg' },
                { name: "Ephiphone Les Paul Standard", cost: 23.69, amount: '0', inBasket: false, img: 'img/string-6.jpg' }
            ];
            for(var i = 0; i < 6; i++){
                Vue.set(VueObject.models, i, stringModels[i]);
            }
            $(".string").css({
                "display": "flex",
                "justify-content": "space-between",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "align-content": "space-between"
            });
        });
        $(".percussion").hide();
        $(".keyboard").hide();
    });


    $("#percussion").click(function () {
        $(".wind").hide();
        $(".string").hide();
        $(".percussion").show(function(){
            var percussionModels = [
                { name: "Ludwig Accent Drive LC174 5 Piece Drumset", cost: 29.95, amount: '0', inBasket: false, img: 'img/percussion-1.jpg' },
                { name: "Remo Fiberskyn HD-8500-06 Frame Drums, 6-Piece Pack", cost: 28.35, amount: '0', inBasket: false, img: 'img/percussion-2.jpg' },
                { name: "Remo ET-0212-10 12' Ocean Drum Fish Graphic", cost: 16.99, amount: '0', inBasket: false, img: 'img/percussion-3.png' },
                { name: "Overseas Connection G-963 Talking Drum", cost: 25.33, amount: '0', inBasket: false, img: 'img/percussion-4.png' },
                { name: "Remo Hand Drums, Djembe, & CD Percussion Set", cost: 20.99, amount: '0', inBasket: false, img: 'img/percussion-5.png' },
                { name: "Meinl ATD-M Medium Talking Drum", cost: 23.69, amount: '0', inBasket: false, img: 'img/percussion-6.png' }
            ];
            for(var i = 0; i < 6; i++){
                Vue.set(VueObject.models, i, percussionModels[i]);
            }
            $(".percussion").css({
                "display": "flex",
                "justify-content": "space-between",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "align-content": "space-between"
            });
        });
        $(".keyboard").hide();
    });

    $(document).ready(function () {
        $("#keyboard").click(function () {
            $(".wind").hide();
            $(".string").hide();
            $(".percussion").hide();
            $(".keyboard").show(function(){
                var keyboardModels = [
                    { name: "Samson Carbon 49 MIDI Keyboard Controller", cost: 29.95, amount: '0', inBasket: false, img: 'img/keyboard-2.png' },
                    { name: "Yamaha LP7A 3-Pedal Unit for Yamaha DGX", cost: 28.35, amount: '0', inBasket: false, img: 'img/keyboard-1.png' },
                    { name: "Yamaha DGX660B Bundle with Pedals and Bench", cost: 16.99, amount: '0', inBasket: false, img: 'img/keyboard-3.png' },
                    { name: "Samson Graphite 49 MIDI", cost: 25.33, amount: '0', inBasket: false, img: 'img/keyboard-4.png' },
                    { name: "Casio CS67BK Privia PX160/PX350", cost: 20.99, amount: '0', inBasket: false, img: 'img/keyboard-5.png' },
                    { name: "Korg NANOKEYST Mobile 25-Key MIDI", cost: 23.69, amount: '0', inBasket: false, img: 'img/keyboard-6.png' }
                ];
                for(var i = 0; i < 6; i++){
                    Vue.set(VueObject.models, i, keyboardModels[i]);
                }
                $(".keyboard").css({
                    "display": "flex",
                    "justify-content": "space-between",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                    "align-content": "space-between"
                });
            });
        });
    });
});