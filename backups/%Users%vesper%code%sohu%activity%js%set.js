Vim�UnDo� 3�@������g����KtHK���K�C�L�9                                      N���    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        N�H�    �              �                 2/* mm : Tue Nov 01 2011 22:24:46 GMT+0800 (CST) */  �(function(){sohuHD.loadFlv=function(a,b,c,d,e,f){var g=new Date;b+="?"+g.getTime(),d=d||"0",e=e||"0",c=c||"#000000";var h=[];document.all?(h.push('<object name="'+a+'" id="'+a+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+d+'" height="'+e+'">'),h.push('<param name="movie" value="'+b+'" />'),h.push('<param name="bgcolor" value="'+c+'" />'),h.push('<param name="quality" value="high" />'),h.push('<param name="allowscripts" value="always" />'),h.push("</object>")):h.push('<embed id="'+a+'" name="'+a+'" allowscriptaccess="always" type="application/x-shockwave-flash" src="'+b+'" width="'+d+'" height="'+e+'" bgcolor="'+c+'" quality="high" />');if(!f||!document.getElementById(f))return h.join("");document.getElementById(f).innerHTML=h.join("")},submitJoinInfo=function(){sohuHD.block("",{fullHtml:['<div class="wbox wbox2">','<div class="wboxT"><span class="tl"></span><span class="tc"></span><span class="tr"></span></div>','<div class="wboxC">','<span class="ml"></span>','<div class="mc">','<div class="in">','<strong class="ft16 color4">\u8bbe\u5b9a\u6210\u529f</strong>','<p><br /><a class="color3" href="/">\u8fd4\u56de\u9996\u9875</a></p>',"</div>","</div>",'<span class="mr"></span>',"</div>",'<div class="wboxB"><span class="bl"></span><span class="bc"></span><span class="br"></span></div>',"</div>"].join(""),cssName:"noCssName"})},$("#submitSet").click(submitJoinInfo),initSetInfo=function(a){_e(a),$("#notJoin").attr("checked",a==1?!0:!1),$("#submitSet").click(function(){var a=$("#notJoin").attr("checked")?1:0;$("#setJoinInfo")[0].setSOData(a)})},sohuHD.switchTab($("#setNav>li"),{boxs:$("#globalSet,#addressSet"),cssName:"active",event:"click"}),sohuHD.gWaitingAjax.gUserParams.push(function(){var a=gUserParams.data;_e(a);var b=$("#name"),c=$("#mobile"),d=$("#address"),e=$("#email");a.name&&(b.val(a.name),c.val(a.mobile),d.val(a.addr),e.val(a.email)),$("#submitAddress").click(function(){var f=b.val(),g=c.val(),h=d.val(),i=e.val();$.trim(f)&&$.trim(g)&&$.trim(h)&&$.trim(i)?$.post(["/user/inputAddr.jhtml?suid=",a.id,"&userName=",f,"&mobile=",g,"&addr=",h,"&email=",i].join(""),function(){sohuHD.block("",{fullHtml:['<div class="wbox wbox2">','<div class="wboxT"><span class="tl"></span><span class="tc"></span><span class="tr"></span></div>','<div class="wboxC">','<span class="ml"></span>','<div class="mc">','<div class="in">','<strong class="ft16 color4">\u60a8\u7684\u83b7\u5956\u4fe1\u606f\u5df2\u4fdd\u5b58</strong>','<p><br /><a class="color3" href="/">\u8fd4\u56de\u9996\u9875</a></p>',"</div>","</div>",'<span class="mr"></span>',"</div>",'<div class="wboxB"><span class="bl"></span><span class="bc"></span><span class="br"></span></div>',"</div>"].join(""),cssName:"noCssName"})}):sohuHD.block("",{fullHtml:['<div class="wbox wbox2">','<div class="wboxT"><span class="tl"></span><span class="tc"></span><span class="tr"></span></div>','<div class="wboxC">','<span class="ml"></span>','<div class="mc">','<div class="in">','<strong class="ft16 color4">\u8981\u586b\u5199\u5b8c\u6574\u8d44\u6599\u624d\u80fd\u9886\u5956\u54e6</strong>','<p><br /><a class="color3" href="javascript:sohuHD.closeBlock();">\u597d\u5427\u63a5\u7740\u5199</a> | <a class="color3" href="/">\u7b97\u4e86\u4e0d\u5199\u4e86</a></p>',"</div>","</div>",'<span class="mr"></span>',"</div>",'<div class="wboxB"><span class="bl"></span><span class="bc"></span><span class="br"></span></div>',"</div>"].join(""),cssName:"noCssName"})})}),$("body").append(sohuHD.loadFlv("setJoinInfo","http://tv.sohu.com/upload/swf/ac/acso.swf","#000000","10","10"))})()5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        N���    �              �                 2/* mm : Wed Dec 07 2011 19:06:51 GMT+0800 (CST) */  	F(function(){sohuHD.loadFlv=function(a,b,c,d,e,f){var g=new Date;b+="?"+g.getTime(),d=d||"0",e=e||"0",c=c||"#000000";var h=[];document.all?(h.push('<object name="'+a+'" id="'+a+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+d+'" height="'+e+'">'),h.push('<param name="movie" value="'+b+'" />'),h.push('<param name="bgcolor" value="'+c+'" />'),h.push('<param name="quality" value="high" />'),h.push('<param name="allowscripts" value="always" />'),h.push("</object>")):h.push('<embed id="'+a+'" name="'+a+'" allowscriptaccess="always" type="application/x-shockwave-flash" src="'+b+'" width="'+d+'" height="'+e+'" bgcolor="'+c+'" quality="high" />');if(!f||!document.getElementById(f))return h.join("");document.getElementById(f).innerHTML=h.join("")};var a=function(a){setTimeout(function(){a.html("")},3e3)};initSetInfo=function(b){_e(b),$("#notJoin").attr("checked",b==1?!0:!1),$("#submitSet").click(function(){var b=$("#notJoin").attr("checked")?1:0;try{$("#setJoinInfo")[0].setSOData(b);var c=$(this).parents("p").prev("div");c.html('<p class="color1">\u60a8\u7684\u6d3b\u52a8\u8bbe\u7f6e\u5df2\u4fdd\u5b58</p>')}catch(d){_e(d.message),c.html('<p class="color1">\u4fdd\u5b58\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u65b0</p>')}a(c)})},sohuHD.switchTab($("#setNav>li"),{boxs:$("#globalSet,#addressSet"),cssName:"active",event:"click"}),sohuHD.gWaitingAjax.gUserParams.push(function(){var b=gUserParams.data,c=$("#name"),d=$("#mobile"),e=$("#address"),f=$("#email");sohuHD.initUserInfoForm({nameTxt:c,mobileTxt:d,addrTxt:e,emailTxt:f}),$("#submitAddress").click(function(){var g=c.val(),h=d.val(),i=e.val(),j=f.val(),k=$(this).parents("p").prev("div");$.trim(g)&&$.trim(h)&&$.trim(i)&&$.trim(j)?(k.html('<p class="color1">\u6b63\u5728\u4fdd\u5b58, \u8bf7\u52ff\u5173\u95ed</p>'),$.ajax({url:["/user/inputAddr.jhtml?suid=",b.id,"&userName=",g,"&mobile=",h,"&addr=",i,"&email=",j].join(""),success:function(){k.html('<p class="color1">\u60a8\u7684\u83b7\u5956\u4fe1\u606f\u5df2\u4fdd\u5b58</p>')},error:function(){k.html('<p class="color1">\u4fdd\u5b58\u5931\u8d25, \u8bf7\u7a0d\u540e\u91cd\u8bd5</p>')},complete:function(){a(k)}})):(k.html('<p class="color1">\u8981\u586b\u5199\u5b8c\u6574\u8d44\u6599\u624d\u80fd\u9886\u5956\u54e6</p>'),a(k))})}),$("body").append(sohuHD.loadFlv("setJoinInfo","http://tv.sohu.com/upload/swf/ac/acso.swf","#FFFFFF","1","1"))})()5��