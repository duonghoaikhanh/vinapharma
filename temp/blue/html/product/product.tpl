<!-- BEGIN: main -->
<div class="container">

  <div class="row">
    <div class="col-xs-12 col-sm-9 noleft">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <ol class="breadcrumb  show mobile">
        <li class="mod_back"><a href="http://jexmax.com.vn/">Quay lại trang trước</a></li>
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

<!-- BEGIN: list_item -->
<div class="list_item {data.class}">
  <!-- BEGIN: row_item -->
  <div class="row_item {row.class}">
    <!-- BEGIN: col_item -->
    <div class="col_item {col.class}">
      <div class="img css_bo">
      	{col.status_pic}
      	<a href="{col.link}" title="{col.title}">
          <div class="limit" style="max-width:{col.pic_w}px; height:{col.pic_h}px;">
            <img src="{col.picture}" alt="{col.title}" title="{col.title}" />
          </div>
        </a>
      </div>
      {col.title}
      <div class="col_item-info">
      	<h3><a href="{col.link}" title="{col.title}">{LANG.global.series}: {col.item_code}</a></h3>
        <div class="price_buy"><span class="auto_price">{col.price_buy}</span> </div>
      </div>
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
<!-- END: list_item --> 

<!-- BEGIN: img_detail -->
<div id="img_detail" {row.class_detail}>
  <div class="connected-carousels">
    <div class="stage">
      <div class="carousel carousel-stage">
        <ul class="list_none">
        	<!-- BEGIN: pic -->
          <li>
          	<a href="{row.src_zoom}" class="fancybox-effects-a" rel="img_detail"><div class="limit" style="width:{row.pic_w}px; height:{row.pic_h}px;">
            	<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="100%" height="100%" align="center"><img src="{row.src}" alt="{row.title}"></td></tr></table>
            </div></a>
          </li>
          <!-- END: pic --> 
        </ul>
      </div>
      <a href="#" class="prev prev-stage"><span>&nbsp;</span></a>
      <a href="#" class="next next-stage"><span>&nbsp;</span></a>
    </div>
  
    <div class="navigation">
      <div class="carousel carousel-navigation">
        <ul class="list_none">
        	<!-- BEGIN: pic_thumb -->
          <li>
          	<div class="img"><div class="limit" style="width:{row.thum_w}px; height:{row.thum_h}px;">
            	<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="100%" height="100%" align="center"><img src="{row.src_thumb}" width="{row.thum_w}" height="{row.thum_h}" alt="{row.title}"></td></tr></table>
            </div></div>
          </li>
          <!-- END: pic_thumb --> 
        </ul>
      </div>
      <a href="#" class="prev-navigation"><span>&nbsp;</span></a>
      <a href="#" class="next-navigation"><span>&nbsp;</span></a>
    </div>
  </div>
</div>
<!-- END: img_detail --> 

<!-- BEGIN: detail -->
<div class="content_blog page_box box_w">
  <div class="okshow_b"></div>
  <div class="sub_menu">
  </div>
  <h1 class="head_title">{data.title}</h1>
  <div class="clear"></div>
  <div class="inner_content_news">
    {data.content}
    <p style="text-align: justify;">
      &nbsp;</p>
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

    </div>
    <div class="inner_content_news share_news" style="float: right; display:inline-block;">
      <br class="clear">
      <div class="share">

        <div class="list_share">
          <div class='addthis_toolbox addthis_default_style '>
            <span style="float:left;font-weight: bold;margin-right: 20px;">{LANG.product.share}</span>
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
<!-- END: detail --> 

<!-- BEGIN: list_other -->
<div class="list_other">
  <div class="list_other-title"><span>{LANG.product.other_product}</span></div>
  <div class="jcarousel-wrapper css_bo">
    <div class="jcarousel">
      <ul class="slider list_none">
        <!-- BEGIN: row -->
        <li>
          <a href="{row.link}" title="{row.title}">
          	<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
            	<tr><td><img src="{row.picture}" alt="{row.title}" title="{row.title}"  /></td></tr>
            </table>
          </a>
        </li>
        <!-- END: row --> 
      </ul>
      <a href="#" class="jcarousel-control-prev">&nbsp;</a>
      <a href="#" class="jcarousel-control-next">&nbsp;</a>
    </div>
  </div>
</div>
<!-- END: list_other --> 