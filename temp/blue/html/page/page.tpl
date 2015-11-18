<!-- BEGIN: main -->
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-9 noleft">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <ol class="breadcrumb  show mobile">
                <li class="mod_back"><a href="{CONF.rooturl}">{LANG.page.comeback}</a></li>
            </ol>
            {data.content}

            <br clear="all">
            <div class="hide_640 container">
                <div id="video">
                    <div id="myVideo">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="//www.youtube.com/embed/3bsb7_0Z5_Y?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                        <!--
                        <img src="/system/cms/themes/default/img/video.jpg" width="auto" height="auto" alt="video" />
                        -->
                        <h2 style="margin:5px 0 15px;">JEX MAX - GIÚP GIẢM ĐAU<br> TÁI TẠO SỤN KHỚP VÀ XƯƠNG DƯỚI SỤN</h2>                    </div>
                </div>
            </div>
        </div>
        {data.block_column}
    </div>
</div>

<!-- END: main -->

<!-- BEGIN: main1 -->
<div id="content">{data.content}</div>
<div id="column">{data.box_column}</div>
<!-- END: main1 -->

<!-- BEGIN: main2 -->
<div id="group_detail">{data.content}</div>
{data.box_column}
<div class="clear"></div>
<!-- END: main2 -->

<!-- BEGIN: list_item -->
<div class="menu_box">
    <!-- BEGIN: col_item -->
        <a class="{col.active}" href="{col.link}">
            {col.title}
        </a>
    <!-- END: col_item -->

    <!-- BEGIN: row_empty -->
    <div class="row_empty">{row.mess}</div>
    <!-- END: row_empty -->
</div>
<!-- END: list_item -->

<!-- BEGIN: list_item1 -->
<div class="list_item">
    <!-- BEGIN: row_item -->
    <div class="row_item {row.class}">
        <!-- BEGIN: col_item -->
        <div class="col_item {col.class}">
            <div class="img"><div class="limit" style="width:{col.pic_w}px;height:{col.pic_h}px;"><a href="{col.link}" title="{col.title}"><img src="{col.picture}" alt="{col.title}" title="{col.title}" /></a></div></div>
            <h3><a href="{col.link}" title="{col.title}">{col.title}</a></h3>
            <div class="short">{col.short}</div>
            <div class="view_detail"><a href="{col.link}" title="{col.title}"><span>{LANG.page.view_detail}</span></a></div>
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

<!-- BEGIN: grid_item -->
<div class="grid_item">
  <!-- BEGIN: row_item -->
  <div class="row_item {row.class}">
    <!-- BEGIN: col_item -->
    <div class="col_item {col.class}">
      <div class="img"><div class="limit" style="width:{col.pic_w}px;height:{col.pic_h}px;"><a href="{col.link}" title="{col.title}"><img src="{col.picture}" alt="{col.title}" title="{col.title}" /></a></div></div>
      <h3><a href="{col.link}" title="{col.title}">{col.title}</a></h3>
      <div class="short">{col.short}</div>
      <div class="view_detail"><a href="{col.link}" title="{col.title}"><span>{LANG.page.view_detail}</span></a></div>
    </div>
    <!-- END: col_item -->
    <div class="clear"></div>
  </div>
  {row.hr}
  <!-- END: row_item -->
  <!-- BEGIN: row_empty -->
  <div class="row_empty">{row.mess}</div>
  <!-- END: row_empty -->
  {data.nav}
</div>
<!-- END: grid_item -->

<!-- BEGIN: list_item_detail -->
<div class="list_item_detail">
  <!-- BEGIN: row_item -->
  <div class="row_item {row.class}">
    <!-- BEGIN: col_item -->
    <div class="col_item {col.class}">
      <h3><a href="{col.link}" title="{col.title}">{col.title}</a></h3>
      <ul class="tool_page list_none">
        <li class="date">{col.date_update}</li>
        <li class="num_comment">{col.num_comment} {LANG.page.comments}</li>
        <li><iframe src="//www.facebook.com/plugins/like.php?href={col.link_share}&amp;width=90px&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=false&amp;height=21;width=90" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe></li>
        <li class="share_facebook"><a href="https://www.facebook.com/sharer/sharer.php?u={col.link_share}" target="_blank">&nbsp;</a></li>
        <li class="share_twitter"><a href="https://twitter.com/home?status={col.link_share}" target="_blank">&nbsp;</a></li>
        <li class="share_google"><a href="https://plus.google.com/share?url={col.link_share}" target="_blank">&nbsp;</a></li>
      </ul>
      <div class="clear"></div>
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
<!-- END: list_item_detail -->

<!-- BEGIN: menu_page -->
    <!-- BEGIN: item -->
    <a class="{item.active}" href="{item.link}">
        {item.title}
    </a>
    <!-- END: item -->
<!-- END: menu_page -->

<!-- BEGIN: item_detail -->

<div class="content_blog page_box box_w">
    <div class="okshow_b"></div>
    <div class="sub_menu">
        <div class="menu_box">
            {data.list_menu_page}
        </div>
    </div>
    <h1 class="head_title">{data.title}</h1>
    <div class="clear"></div>
    <div class="inner_content_news">
        {data.content}
        <br clear="all">

        <br class="clear">
        <div class="text-right item-info" itemscope="" itemtype="http://data-vocabulary.org/Review-aggregate">
            <div id="box_rate" class="box_rate">
                                <span class="rate_1">
                                    <span class="rate_2">
                                        <span class="rate_3">
                                            <span class="rate_4">
                                                <span class="rate_5"></span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
            </div>
            <meta itemprop="itemreviewed" content="Quản trị alipasplatinum.com.vn đã duyệt">
            <meta itemprop="photo" content="">
            <meta itemprop="rating" content="4.79">
            <meta itemprop="votes" content="1100">
            <a class="rating rateit-small" hreflang="vi">
                <input type="hidden" value="4.79" name="score" id="rating-score">
            </a> (<span>4.79</span>★ | <span>1100</span> Đánh giá)
            <script>
                jQuery( document ).ready(function() {
                    jQuery( "#box_rate" ).click(function() {
                        alert( "Thông tin đã được gửi đến BQT website. Cảm ơn bạn đã đánh giá." );
                    });
                });
            </script>
        </div>
        <div class="inner_content_news share_news" style="float: right; display:inline-block;">
            <br class="clear">
            <div class="share">

                <div class="list_share">
                    <div class='addthis_toolbox addthis_default_style '>
                        <span style="float:left;font-weight: bold;margin-right: 20px;">{LANG.page.share}</span>
                        <a class='addthis_button_facebook_like' fb:like:layout='button_count'></a>
                        <a class='addthis_button_tweet'></a>
                        <a class='addthis_button_google_plusone' g:plusone:size='medium'></a>
                        <a class='addthis_counter addthis_pill_style'></a>
                    </div>
                    <script src='http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f57432236fb4dee' type='text/javascript'>
                    </script>
                    <div class="clear" style="clear: both"></div>

                </div>

            </div><!--end .share-->


            <style>.sharethis{display:none}.share{position:relative}.st_like_fb{position:absolute;top:1px;left:80px}</style></div>
        <br clear="all">
    </div><!--end .inner_content_news-->
    <br clear="all">
</div>

<!-- END: item_detail -->

<!-- BEGIN: html_title_more -->
<div class="tool_page">
  <a href="javascript:print();" class="icon_print">{LANG.page.print}</a>
  <span>|</span>
  <a href="mailto:?subject={data.title}
&body={data.link}" class="icon_send_email">{LANG.page.send_email}</a>
</div>
<!-- END: html_title_more -->

<!-- BEGIN: list_other -->
<div class="list_other">
  <div class="hr"></div>
  <div class="list_other-title">{LANG.page.other_page}</div>
	<ul class="list_none">
  	<!-- BEGIN: row -->
  	<li><a href="{row.link}" title="{row.title}">{row.title}</a></li>
    <!-- END: row -->
  </ul>
</div>
<!-- END: list_other -->