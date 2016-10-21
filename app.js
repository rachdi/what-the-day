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
			$('#vérifier').on('click',app.whatAday);
			$('#restart').on('click',app.init);

		},
		day: function(){
			app.jour = $('#days').val();
			if(app.jour <1){
				$('#head').append('<div id="message" class="error">Try again</div>');
				$('#days').css('border','red solid 3px');
				app.init();
			}
			if(app.jour >31){
				$('#days').css('border','red solid 3px');
				app.init();
			} else {
				$('#reset').hide()
				$('body').append('<div class="overlay"><h1 id="whatAday"></h1><button id="restart" label="Recommencer">Restart</button></div>');
			}
		},
		month: function(){
			app.mois = $('#month').val();
			
		},
		year: function(){
			app.année = $('#year').val();
			if(app.année <1){
				$('#year').css('border','red solid 3px');
				app.init();
			}
			
		},
		vérif: function(){
			app.result = moment({year:app.année, month: app.mois, day: app.jour}).format('dddd');

		},
		whatAday: function(){
			app.day();
			app.month();
			app.year();
			app.vérif();
			$('#whatAday').text(app.result);

		},
		reset: function(){
			$('#reset').show()
			$('.overlay').hide()
			app.init();
		}
	};
	app.init();

});


