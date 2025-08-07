var ModalBoxAut = {
	show: function (url, width, height) {
		var $modalBg = $('div.bg-modal');

		if ($modalBg.length == 0) {
			$('body').append('<div id="divIframeAut" class="bg-modal"></div>');
			$modalBg = $('div.bg-modal');
		}
		
		var rpcAut = new easyXDM.Rpc({
			container : "divIframeAut",
			props : {
				style : {
					border: "0px",
					overflow:"hidden",
					height: height + "px",
					width: width + "px",
					display:"block",
					margin: "50px auto 0"
				},
				scrolling: "no"
			},
			remote : url // the path to the provider
		},
			{
			local : {
				closeModal : function (event) {
					ModalBoxAut.close(event);
				}
			}
		});
		
		$modalBg.fadeIn('fast');
	},
	close: function (event) {
		var $modalBg = $('div.bg-modal');
		$modalBg.fadeOut('fast', function() {
			$modalBg.html('');
		});
	}
};

easyXDM.DomHelper.requiresJSON("/PersonasDaviviendaNewTheme/resources/js/json2.js");

function openIframe(url) {
	
	document.getElementById('divIFrame').innerHTML = '';
	var rpc = new easyXDM.Rpc({
			container : "divIFrame",
			props : {
				style : {
					border: "0px",
					overflow:"hidden",
					height: "310px",
					width: "100%",
					display:"block"
				},
				scrolling: "no"
			},
			remote : url // the path to the provider
		},
			{
			local : {
				openModal : function (urlMenuAuthRSA) {
					ModalBoxAut.show(urlMenuAuthRSA, 1030, 575);
				},
				closeModal : function (event) {
					ModalBoxAut.close(event);
				}
			}
		});
}