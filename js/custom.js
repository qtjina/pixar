$(document).ready(function(){  		
	
	// 어티클 영역 표시 효과
	$('.contents > article').hover(
		function(){
			// 마우스가 올라가면 나타남
            var vid = $(this).find('video').get(0);
            vid.play();
            
			$(this)
				.stop()
				.animate({'width': '35%'}, 500, function(){
					// 2번째 애니메이션
					$(this).find('h3')
						.stop()
						.animate({'right': '10px'}, 400);
					$(this).find('p')
						.stop()
						.animate({'right': '10px'}, 800);
				});
			$(this).find('video')
				.stop()
				.animate({'opacity': 0.9}, 600);
		},
		function(){
			// 마우스가 나가면 사라짐
			$(this)
				.stop()
				.animate({'width': '12%'}, 500);
			$(this).find('video')
				.stop()
				.animate({'opacity': 0}, 600);	
			$(this)
				.find('h3').stop()
				.animate({'right': '-310px'}, 200);
			$(this)
				.find('p').stop()
				.animate({'right': '-310px'}, 500);			
		}
	);
	
});






























