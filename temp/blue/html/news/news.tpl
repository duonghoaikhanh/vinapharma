<!-- BEGIN: main -->
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-9 noleft">
            <div class="box_w">
                {data.navigation}
                {data.content}
            </div>
        </div>
        {data.block_column}
    </div>
</div>

<!-- END: main --> 

<!-- BEGIN: focus -->
<div class="news_focus">
	<div class="news_focus-title">
  	<a href="{row.link}" title="{row.title}">{row.title}</a> <span class="date">({row.date_update})</span>
  </div>
	<div class="img"><a href="{row.link}" title="{row.title}"><img src="{row.picture}" alt="{row.title}" title="{row.title}" /></a></div>
	<div class="short">{row.short}</div>
	<div class="view_detail"><a href="{row.link}" title="{row.title}">{LANG.news.view_detail}</a></div>
  <div class="clear"></div>
</div>
<!-- END: focus --> 

<!-- BEGIN: list_group -->
<div class="list_group">
	{data.content}
  <!-- BEGIN: row_item -->
  <h2 class="row_item-title"><a href="{row_group.link}" title="{row_group.title}">{row_group.title}</a></h2> 
  <div class="row_item {row_group.class}">  	 
    <div class="img"><a href="{row.link}" title="{row.title}"><img src="{row.picture}" alt="{row.title}" title="{row.title}" /></a></div>
    <h3 class="title"><a href="{row.link}" title="{row.title}">{row.title}</a> <span class="date">({row.date_update})</span></h3>
    <div class="short">{row.short}</div>	
    <!-- BEGIN: other -->
    <ul class="other">
      <!-- BEGIN: li -->
      <li><a href="{other.link}">{other.title}</a> <span class="date">({other.date_update})</span></li>
      <!-- END: li -->  
    </ul>
    <!-- END: other -->    
    <div class="clear"></div>
  </div>
  {row_group.hr}
  <!-- END: row_item --> 
  <!-- BEGIN: row_empty -->
  <h2 class="row_item-title"><a href="{row_group.link}" title="{row_group.title}">{row_group.title}</a></h2> 
  <div class="row_empty {row_group.class}">{row_group.mess}</div>
  {row_group.hr}
  <!-- END: row_empty --> 
</div>
<!-- END: list_group -->

<!-- BEGIN: list_item -->
<div class="blog_box">

    <div class="box_mod_news">
        <!-- BEGIN: item_1 -->
        <div class="col-xs-12 col-sm-12 col-md-7 pull-left noleft noright">
            <div class="news1">
                <a class="tit_mod_news " href="{item.link}" title="{item.title}">
                    <img class="thumb" src="{item.picture}" alt="{item.title}">
                </a>
                <a href="{item.link}" title="{item.title}" class="title">
                    <h3>{item.title}</h3>
                </a>
                <div class="intro">{item.short}</div>
                <a href="{item.link}"><span class="mores">{LANG.news.view_next}</span></a>
            </div>
        </div>
        <!-- END: item_1 -->
        <div class="col-xs-12 col-sm-12 col-md-5 noright">
            <!-- BEGIN: item_2 -->
                <div class="col-xs-12 noleft noright margin15">
                    <a class="tit_mod_news " href="{item.link}" title="{item.title}">
                        <img class="thumb" src="{item.picture}">
                    </a>
                    <a href="{item.link}" title="{item.title}" class="title">
                        <h3>{item.title}</h3>
                    </a>
                    <div class="intro">{item.short}</div>
                    <a class="box_lsnews" href="{item.link}" title="{item.title}"><span class="mores">{LANG.news.view_next}</span></a>
                </div>
            <!-- END: item_2 -->
        </div>
        <div class="clear"></div>
    </div>

    <!-- BEGIN: item -->
        <div class="item ">
            <div class="col-xs-12 col-sm-3 col-md-2 noleft noright">
                <a class="thumb" href="{item.link}">
                    <img src="{item.picture}">
                </a>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 noright">
                <a class="title" href="{item.link}"> <h3>{item.title}</h3></a>
                <div class="news_intro">{item.short}</div>
                <a href="{item.link}"><span class="mores">{LANG.news.view_next}</span></a>
            </div>
            <br clear="all"><div class="lines_h"></div>
        </div>
    <!-- END: item -->


    <div class="clear"></div>

    {data.nav}


</div>

<!-- END: list_item -->

<!-- BEGIN: list_item1 -->
<div class="list_item">
  <!-- BEGIN: row_item -->
  <div class="row_item {row.class}">
    <!-- BEGIN: col_item -->
    <div class="col_item {col.class}">
      <div class="img"><div class="limit" style="width:{col.pic_w}px;height:{col.pic_h}px;"><a href="{col.link}" title="{col.title}"><img src="{col.picture}" alt="{col.title}" title="{col.title}" /></a></div></div>
      <h3><a href="{col.link}" title="{col.title}">{col.title}</a><span>&nbsp;</span></h3>
      <div class="short">{col.short}</div>
      <div class="date">{col.date_update}</div>
      <a href="{col.link}" class="view_detail" title="{col.title}">{LANG.news.view_detail}</a>
    </div>
    <!-- END: col_item --> 
    <div class="clear"></div>
  </div>
  {row.hr}
  <!-- END: row_item --> 
  <!-- BEGIN: row_empty -->
  <div class="row_empty">{row.mess}</div>
  <!-- END: row_empty --> 
</div>
{data.nav}
<!-- END: list_item1 -->

<!-- BEGIN: html_title_more -->

<!-- END: html_title_more --> 

<!-- BEGIN: list_other -->
<div class="blog_others">
    <!-- BEGIN: row -->
        <div class="col-xs-12 noleft noright items">
            <div class="col-xs-12 col-sm-3 noleft">
                <a class="link_img" href="{item.link}" title="{item.title}">
                    <img class="thumb" src="{item.picture}">
                </a>
            </div>
            <div class="col-xs-12 col-sm-9 noleft noright">
                <a class="title" href="{item.link}" title="{item.title}">{item.title}</a>
                <div class="intro">{item.short}</div>
                <a href="{item.link}" title="{item.title}">
                    <span class="readmore">{LANG.news.detail}</span>
                </a>
            </div>
        </div>
    <!-- END: row -->

</div>
<br clear="all">
<!-- END: list_other -->

<!-- BEGIN: list_other1 -->
<div class="hr"></div>
<div class="list_other">
    <div class="list_other-title">{LANG.news.other_news}</div>
    <ul>
        <!-- BEGIN: row -->
        <li><a href="{row.link}" title="{row.title}">{row.title}</a> <span class="date">({row.date_update})</span></li>
        <!-- END: row -->
    </ul>
</div>
<!-- END: list_other1 -->