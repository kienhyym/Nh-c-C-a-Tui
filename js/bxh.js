	var url='http://localhost:9083/vietnam';

		axios.get(url).then(function(x){
						var arr = x.data;
						load(arr);
						})
					 .catch(function (error) {
				    console.log(error);
				  });

function load(ar){
						$(document).ready(function (){
								
							for(let i = 0; i<ar.length;i++){
								$('.info-BXH-BAIHAT p:nth-child(1)')[i].innerHTML = '<a href="#">'+ar[i].Name+'</a>';
							}
							for(let i = 0; i<ar.length;i++){
								$('.info-BXH-BAIHAT p:nth-child(2)')[i].innerHTML =  '<a href="#">'+ar[i].singer+'</a>';
							}
						});
						
	}
