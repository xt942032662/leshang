$(document).ready(function() {
			    $(".mui-bar-nav .mui_word").click(function () {
			        var x=$(this).index();
			        $(this).addClass("cur").siblings().removeClass("cur");
			        $(this).parents(".mui-bar-nav").next().find(".index_content").eq(x).addClass("cur").siblings().removeClass("cur");
			    });
			});
			
				window.onload=function(){
            		var box=document.getElementById("box");
            		var arr_a=box.getElementsByTagName("a");
            		for (var i=0;i<arr_a.length;i++) {
            			 var arr_id=arr_a[i].getAttribute("id");
            			 document.getElementById(arr_id).addEventListener("tap",tap_b);
            		}
            		function tap_b(){
						mui.openWindow({
							url:"sspd.html",
							id:"sspd",
							createNew:true,
							show:{
								aniShow:"slide-in-right",
								duration:200
							},
							waiting:{
								title:"正在加载……"
							}
						
						});
            		}
            		
            		var box1=document.getElementById("pop");
            		var arr_a1=box1.getElementsByTagName("li");
            		for (var i=0;i<arr_a1.length;i++) {
            			 var arr_id1=arr_a1[i].getAttribute("id");
            			 document.getElementById(arr_id1).addEventListener("tap",tap_b1);
            		}
            		function tap_b1(){
						mui.openWindow({
							url:"lxys.html",
							id:"lxys",
							createNew:true,
							show:{
								aniShow:"slide-in-right",
								duration:200
							},
							waiting:{
								title:"正在加载……"
							}
						
						});
            		}
            		
            		var box2=document.getElementById("txs");
            		var arr_a2=box2.getElementsByTagName("li");
            		for (var i=0;i<arr_a2.length;i++) {
            			 var arr_id2=arr_a2[i].getAttribute("id");
            			 document.getElementById(arr_id2).addEventListener("tap",tap_b2);
            		}
            		function tap_b2(){
						mui.openWindow({
							url:"tksjx.html",
							id:"txsjx",
							createNew:true,
							show:{
								aniShow:"slide-in-right",
								duration:200
							},
							waiting:{
								title:"正在加载……"
							}
						
						});
            		}
            		
            		var box3=document.getElementById("beauty");
            		var arr_a3=box3.getElementsByTagName("li");
            		for (var i=0;i<arr_a3.length;i++) {
            			 var arr_id3=arr_a3[i].getAttribute("id");
            			 document.getElementById(arr_id3).addEventListener("tap",tap_b3);
            		}
            		function tap_b3(){
						mui.openWindow({
							url:"spxq.html",
							id:"spxq",
							createNew:true,
							show:{
								aniShow:"slide-in-right",
								duration:200
							},
							waiting:{
								title:"正在加载……"
							}
						
						});
            		}
            		
            	document.getElementById("new").addEventListener("tap",function(){
				mui.openWindow({
					url:"newpeople.html",
					id:"new",
					createNew:true,
					show:{
						aniShow:"slide-in-right",
						duration:200
					},
					waiting:{
						title:"正在加载……"
					}
				});
			});
			document.getElementById("manual").addEventListener("tap",function(){
				mui.openWindow({
					url:"manual.html",
					id:"manual",
					createNew:true,
					show:{
						aniShow:"slide-in-right",
						duration:200
					},
					waiting:{
						title:"正在加载……"
					}
				});
			});
			document.getElementById("info").addEventListener("tap",function(){
				mui.openWindow({
					url:"info.html",
					id:"info",
					createNew:true,
					show:{
						aniShow:"slide-in-right",
						duration:200
					},
					waiting:{
						title:"正在加载……"
					}
				});
			});
			document.getElementById("wcd").addEventListener("tap",function(){
				mui.openWindow({
					url:"wcd.html",
					id:"wcd",
					createNew:true,
					show:{
						aniShow:"slide-in-right",
						duration:200
					},
					waiting:{
						title:"正在加载……"
					}
				});
			});
			
//			document.getElementById("search").addEventListener("tap",function(){
//				mui.openWindow({
//					url:"search_item.html",
//					id:"search",
//					createNew:true,
//					show:{
//						aniShow:"slide-in-right",
//						duration:200
//					},
//					waiting:{
//						title:"正在加载……"
//					}
//				});
//			});
			
			
          }
			
			