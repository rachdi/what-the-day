$(document).ready(function(){

	var app = {
		jour:null,
		année:null,
		mois:null,
		result:null,

		init: function(){
			moment.locale('fr');
			this.listener();

		},
		listener: function(){
			$('#vérifier').on('click',this.whatAday.bind(this));
			$('#restart').on('click',this.init.bind(this));

		},
		day: function(){
			this.jour = $('#days').val();
			if(this.jour <1){
				$('#head').append('<div id="message" class="error">Try again</div>');
				$('#days').css('border','red solid 3px');
				this.init();
			}
			if(this.jour >31){
				$('#days').css('border','red solid 3px');
				this.init();
			} else {
				$('#reset').hide()
				$('body').append('<div class="overlay"><h1 id="whatAday"></h1><button id="restart" label="Recommencer">Restart</button></div>');
			}
		},
		month: function(){
			this.mois = $('#month').val();
			
		},
		year: function(){
			this.année = $('#year').val();
			if(this.année <1){
				$('#year').css('border','red solid 3px');
				this.init();
			}
			
		},
		vérif: function(){
			this.result = moment({year:this.année, month: this.mois, day: this.jour}).format('dddd');

		},
		whatAday: function(){
			this.day();
			this.month();
			this.year();
			this.vérif();
			$('#whatAday').text(this.result);

		},
		reset: function(){
			$('#reset').show()
			$('.overlay').hide()
			this.init();
		}
	};
	app.init();

});


