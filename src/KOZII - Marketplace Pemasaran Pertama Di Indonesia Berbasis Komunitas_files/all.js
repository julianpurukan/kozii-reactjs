function loadOpt(val, target, uri, selected){
						
	if(val){
		if(target !== null){
			$.getJSON(uri).done(function(json){
				let opt	= [];
				$.each(json, function(key, value){
					opt.push("<option target='" + value[0] + "' value='" + value[1] + "'>" + value[2] + "</option>");
				});
				$('#' + target).empty();
				$('#' + target).append(opt.join());

				if(typeof(selected) != "undefined"){
					$('#' + target).val(selected);
				}
			});
		}
	}
}

function calcLoan(){
			
	let formatter = new Intl.NumberFormat('id', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	});
	
	var bs = $("input[name='bankSelect']:checked");
	
	$('#dp').val(bs.attr('dp'));
	$('#sukuBunga').val(bs.attr('interest'));
	
	$('#bank-' + bs.val()).prop("checked", true);

	let hargaProperti	= $('#propertyPrice').val();
	let dp				= hargaProperti * ($('#dp').val()/100);
	let jumlahPinjaman	= hargaProperti - dp;
	let n				= 12 * $('#jangkaWaktu').val();
	let i				= $('#sukuBunga').val()/100;
	let cicilan	= (Number(jumlahPinjaman)*(i/12)/(1-Math.pow(1/(1+i/12),Number(n)))).toFixed(0);


	$('#harga_properti').val(hargaProperti);
	$('#uang_muka').val(dp);
	$('#cicilan').val(cicilan);
	$('#hargaProperti').text(formatter.format(hargaProperti));
	$('#uangMuka').text(formatter.format(dp));
	$('#calcResult').text(formatter.format(cicilan));
}

var options = {

	url: function(q) {
		return "{{ url('suburb') }}";
	},

	getValue: function(element) {
		return element.name;
	},

	ajaxSettings:{
		dataType: "json",
		method: "GET",
		data: {
		dataType: "json"
		}
	},
	
	list: {
		maxNumberOfElements: 10,
	},

	preparePostData: function(data) {
	data.q = $("#mainSearch").val();
	return data;
	},

	requestDelay: 400,
	adjustWidth:0
};

$("#mainSearch").easyAutocomplete(options);