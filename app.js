$(document).ready(function(){



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
			jour = console.log($('#days').val());
			
		},
		month: function(){
			mois = console.log($('#month').val());
			
		},
		year: function(){
			annee = console.log($('#year').val());
			
		},
		vérif: function(){

		},
		whatAday: function(){
			app.day();
			app.month();
			app.year();
			$('#whatAday').text(jour + mois + annee);

		}

	};

	app.init();


});