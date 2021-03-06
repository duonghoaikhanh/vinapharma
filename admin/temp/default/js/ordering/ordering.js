﻿function html_row_pro(data)
{	
	return ttHTemp.join ('<tr id="row_'+data.type+'_'+data.type_id+'">')
              ('<td class="cot">'+data.title+'</td>')
              ('<td class="cot" align="center"><input type="text" value="'+data.price+'" name="price['+data.type_id+']" size="4" style="text-align:center;"></td>')
              ('<td class="cot" align="center"><input type="text" value="'+data.num_add+'" class="update_value" name="import['+data.type_id+']" size="4" style="text-align:center;"></td>')
              ('<td class="cot" align="center"><a href="#sub_'+data.type+'_'+data.type_id+'" class="fancybox">Click</a></td>')
            ('</tr>');
}

function add_pro_row(){
	$('#list_product').change(function(){
		var data = new Array();
		data['title'] = $(this).find('option:selected').text();
		data['price'] = 0;
		data['in_stock'] = 0;
		data['out_stock'] = 0;
		data['num_add'] = 0;
		data['type'] = 'product';
		data['type_id'] = $(this).val();
		if(!$('#row_'+data.type+'_'+data.type_id).length) {
			$('#tbody_product').append(html_row_pro(data));
		}
		if(!$('#sub_'+data.type+'_'+data.type_id).length) {
			$('#list_sub').append(html_row_sub_pro(data));
			auto_add_value('sub_'+data.type+'_'+data.type_id);
		}
	});
}

function auto_add_value(sub_id)
{
	var row_id = sub_id.replace('sub','row');
	$('#'+sub_id+' .update_value').change(function(){
		var num = 0;
		$('#'+sub_id+' .update_value').each(function() {
			num += parseInt($(this).val());
		});
		$('.update_value','#'+row_id).val(num);
	});
}

function auto_update_value()
{	
	$('.update_value').change(function(){
		var of = $(this).data('of');
		var num = 0;
		$('.update_value.of_'+of).each(function() {
			num += parseInt($(this).val());
		});
		$('#'+of).val(num);
	});
}

/*--------------------------------------*/

ttHReceipt = {
	list_order_detail:function (order_id) {
		$('#tbody_ordering').html('<tr><td class="tth-loading" colspan="7">&nbsp;</td></tr>');
		$.ajax({
			type: "POST",
			url: ROOT+"ajax.php",
			data: { "m" : "ordering", "f" : "order_detail", "order_id" : order_id}
		}).done(function( string ) {
			var data = JSON.parse(string);
			if(data.ok == 1) {
				$('#tbody_ordering').html(data.html);
			}
		});
	},
	
	add_order_row:function () {
		$('#list_ordering').change(function(){
			ttHReceipt.list_order_detail($(this).val());
		});
	}
};