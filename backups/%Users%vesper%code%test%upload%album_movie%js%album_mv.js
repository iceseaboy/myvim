Vim�UnDo� GX�h�4dW������"���1���,�[�m  s   �                    me.fullBox.html(['<div id="criticsSort" class="critics_sort">排序：&nbsp;&nbsp;<a href="#" rel="9">按热度</a>&nbsp;&nbsp;<a href="#" rel="2" class="current">按时间</a></div>'  �   w                       N��    _�                    |        ����                                                                                                                                                                                                                                                                                                                           |         �          V       N��    �  {  �  �    �  {  |       p           (function(){   q            var playlistId = (typeof VRS_ALBUM_ID=="undefined" || VRS_ALBUM_ID=="") ? PLAYLIST_ID : VRS_ALBUM_ID;               var me = album;   /            me.fullBox = $('#fullCriticsList');   .            me.loadingTxt = me.fullBox.html();   ,            me.shortBox = $('#criticsList');   Q            me.url = 'http://access.tv.sohu.com/user/entries.album.showCritics-';               me.sortType = '1';               me.pageIndex = 1;               me.pageSize = 15;               me.totalSize = 0;               me.totalPage = 0;   &            me.returnNav = function(){   )                var total = me.totalPage;   )                var index = me.pageIndex;                   var tmp = [];                   if(index > 1)   e                    tmp.push('<a href="#pllist_full" rel="',(index-1),'" page="true">上一页</a>');   *                for(var i=1;i<=total;++i){   "                    if(i == index)   7                        tmp.push('<span>',i,'</span>');                       else   ]                        tmp.push('<a href="#pllist_full" rel="',i,'" page="true">',i,'</a>');                   }   !                if(index < total)   e                    tmp.push('<a href="#pllist_full" rel="',(index+1),'" page="true">下一页</a>');   $                return tmp.join('');               };   '            me.getCritics = function(){                   $.ajax({   u                    url : [me.url,me.sortType,'-gbk-',me.pageIndex,'-',me.pageSize,'-0-',playlistId,'.html'].join('')   !                    ,cache : true   (                    ,dataType : 'script'   +                    ,success : function(){}                   });               };   ,            me.showCritics = function(data){   /                if(!data || !data.data) return;   =                me.totalSize = parseInt(data.data.totalSize);   "                if(!me.totalSize){   2                    me.shortBox.parent().remove();   t                    me.fullBox.html('<div class="nocont"><p>还没有人发表影评哦 赶快来抢！</p></div>');                       return;                   }   D                me.totalPage = parseInt(me.totalSize / me.pageSize);   .                if(me.totalSize % me.pageSize)   #                    ++me.totalPage;   H                $('#criticsCount,#fullCriticsCount').html(me.totalSize);   *                var list = data.data.list;   E                var shortNum = list.length > 3 ? 2 : (list.length-1);   !                var tmpHtml = [];   "                var sortHtml = '';   '                if(me.sortType == '1'){   �                    sortHtml = '<div id="criticsSort" class="critics_sort">排序方式：<a href="#" rel="1" class="current">按热度</a>&nbsp;&nbsp;<a href="#" rel="2">按时间</a></div>';                   }                   else{   �                    sortHtml = '<div id="criticsSort" class="critics_sort">排序方式：<a href="#" rel="1">按热度</a>&nbsp;&nbsp;<a href="#" rel="2" class="current">按时间</a></div>';                   }   G                var nickName,avatar,time,url,userID,title,summary = '';   +                var strSub = sohuHD.strSub;   /                for(var i=0;i<list.length;++i){   0                    nickName = list[i].nickName;   '                    url = list[i].link;   ,                    userID = list[i].userId;   i                    avatar = list[i].userPic || 'http://tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg';   ,                    time = list[i].timeFrom;   *                    title = list[i].title;   ?                    summary = strSub(list[i].summary,230,true);       G                    tmpHtml.push('<div class="listA"><div class="pic">'   p                        ,'<a href="http://my.tv.sohu.com/user/',userID,'" target="_blank" title="',nickName,'">'   g                        ,'<img height="48" width="48" alt="',nickName,'" src="',avatar,'" /></a></div>'   -                        ,'<div class="info">'   ~                            ,'<h3><a href="http://my.tv.sohu.com',url,'" target="_blank" title="',title,'">',title,'</a></h3>'   5                            ,'<p class="p2">',summary   �                                ,'<a href="http://my.tv.sohu.com',url,'" target="_blank" title="查看完整影评">[详细]</a></p>'   -                            ,'<p class="p3">'   x                                ,'<a href="http://my.tv.sohu.com/user/',userID,'" target="_blank" title="',nickName,'">'   D                                    ,nickName ,'</a>发表于',time,   �                                    '</span><span class="p3right"><a href="http://my.tv.sohu.com',url,'#remark" target="_blank">回复</a>('   F                                    ,list[i].replyCount,')</span></p>'   !                        ,'</div>'                       ,'</div>');   &                    if(i == shortNum){   ;                        me.shortBox.html(tmpHtml.join(''));                       }                   }   s                me.fullBox.html([sortHtml,tmpHtml.join(''),'<div class="page">',me.returnNav(),'</div>'].join(''));                   tmpHtml = null;   ;                $('#getFullCriticsList').click(function(e){   9                    $('#blockA>.tab1>ul>li.tk5').click();                   }).show();               };   )            me.fullBox.click(function(e){   !                var o = e.target;   '                var box = o.parentNode;   +                if(o.getAttribute('page')){   3                    me.fullBox.html(me.loadingTxt);   3                    me.pageIndex = parseInt(o.rel);                   }   4                if(box.className == 'critics_sort'){   1                    if(o.className != 'current'){   H                        //mm.2011.09.21, make sortType before getCritics   ,                        me.sortType = o.rel;   D                        $(box).children('a').toggleClass('current');                       }   '                    e.preventDefault();                   }                    me.getCritics();               });               me.getCritics();           })();5�_�                   �   1    ����                                                                                                                                                                                                                                                                                                                           |          �          V       N��     �  �  �  s      ^                            ,(list[i]['top'] == '') ? '<span class="critics_top"></span>' : ''5�_�                   �   7    ����                                                                                                                                                                                                                                                                                                                           |          �          V       N��    �  �  �  s      e                            ,(list[i].quintessence == '') ? '<span class="critics_plus"></span>' : ''5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                                             N���     �  �  �  s                  me.sortType = '9';5�_�                   �   #    ����                                                                                                                                                                                                                                                                                                                                                             N���     �  �  �  s      '                if(me.sortType == '9'){5�_�                   �   w    ����                                                                                                                                                                                                                                                                                                                                                             N��      �  �  �  s      �                    me.fullBox.html(['<div id="criticsSort" class="critics_sort">排序：&nbsp;&nbsp;<a href="#" rel="9" class="current">按热度</a>&nbsp;&nbsp;<a href="#" rel="2">按时间</a></div>'5�_�                    �   w    ����                                                                                                                                                                                                                                                                                                                                                             N��    �  �  �  s      �                    me.fullBox.html(['<div id="criticsSort" class="critics_sort">排序：&nbsp;&nbsp;<a href="#" rel="9">按热度</a>&nbsp;&nbsp;<a href="#" rel="2" class="current">按时间</a></div>'5��