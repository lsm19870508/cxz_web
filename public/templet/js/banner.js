//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$("#jsNav .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				$("#banner a").eq(i).fadeIn("slow").siblings("a").hide();
				$(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
				return false;
			});
		});
		
		var pg = function(flag){
			//
			if (flag) {
				if (curr == 0) {
					todo = 2;
				} else {
					todo = (curr - 1) % 3;//
				}
			} else {
				todo = (curr + 1) % 3;//
			}
			$("#jsNav .trigger").eq(todo).click();
		};
		
		//
		$("#prev").click(function(){
			pg(true);
			return false;
		});
		
		//
		$("#next").click(function(){
			pg(false);
			return false;
		});
		
		//
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;//
			$("#jsNav .trigger").eq(todo).click();
		},3000);
		
		
		$("#jsNav a").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % 3;//
					$("#jsNav .trigger").eq(todo).click();
				},3000);			
			}
		);
	})();
});
//]]>
