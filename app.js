$(document).ready(function(){
var localLocale = moment();
localLocale.locale('fr');
	var app = {
		jour:null,
		année:null,
		mois:null,
		result:null,

		init: function(){
			this.listener();

		},

		listener: function(){
			$('#vérifier').on('click',app.whatAday);
		},
		day: function(){
			app.jour = $('#days').val();
			
		},
		month: function(){
			app.mois = $('#month').val();
			
		},
		year: function(){
			app.année = $('#year').val();
			
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


		}

	};
	moment.locale('fr');
	app.init();


});


