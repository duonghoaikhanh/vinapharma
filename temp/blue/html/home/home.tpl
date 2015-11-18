<!-- BEGIN: main -->
<div id="home_box">
  <div class="container">
    <div class="row" >
      <div class="xs12 col-xs-6 col-sm-4">
        <div class="box_tuvan">
          <h3><a href="tu-van"><span>{LANG.global.faq}</span></a></h3>
          <div class="content"><p>
              {data.banner_faq_home}<br />
              {LANG.home.short_faq}</p></div>
          <a class="view_all" href="hoi-dap.html">Xem tiếp</a>
          <div class="box_b"><span></span></div>
        </div>
      </div>

      <div class="xs12 col-xs-6 col-sm-4 ">
          {data.banner_get_news_focus}
      </div>
      <div class="xs12 col-xs-6 col-sm-4 divtintuc">
          {data.get_news}
      </div>
    </div>
  </div>
</div>
<!-- END: main -->

<!-- BEGIN: group_news_focus -->
<div class="box_chamsoc">
  <h3><span><a href="hoat-dong-nhan-hang.html">Hoạt động của JEX MAX</a></span></h3>
  <div class="content">
    <div id="owl-hdnh" class="owl-carousel">

      <!-- BEGIN: row -->
      <div class="item skyBlue">
        <a  href="{row.link}" ><img  style="max-width:100%;" class="img1" src="{row.picture}" /></a>
        <a class="box_title"  href="{row.link}" tppabs="http://jexmax.com.vn/us-open-c25.html">{row.title}</a>
       {row.short}
      </div>
      <!-- END: row -->

    </div>
  </div>
  <a class="view_all" href="hoat-dong-nhan-hang.html">Chi tiết</a>
  <div class="box_b"><span></span></div>
</div>
<!-- END: group_news_focus -->

<!-- BEGIN: group_news -->
<div class="box_tintuc">
  <h3><span><a href="tin-tuc-c1.html">Tin tức</a></span></h3>
  <div class="content">
    <!-- BEGIN: row -->
    <div class="box_news">
      <div class="col-xs-3 col-md-4 pull-left noleft noright">
        <!-- BEGIN: item_old -->
        <a  class="img" href="{row.link}" title="{row.title}">
          <div class="img_lbl new"><span></span>
            <img  src="{row.picture}"  alt="{row.title}" />
          </div>
        </a>
        <!-- END: item_old -->
      </div>

      <div class="col-xs-9 col-md-8 pull-right noright ">
        <!-- BEGIN: item -->
        <a class="item" title="{row.title}" href="{row.link}" >{row.title}</a>
        <!-- END: item -->
      </div>

    </div>
    <div class="line_news"></div>
    <!-- END: row -->
  </div>

  <a class="view_all" href="tin-tuc-c1.html">Xem tiếp</a>
  <div class="box_b"><span></span></div>
</div>
<!-- BEGIN: group_news -->

<!-- BEGIN: main_slide -->
<div class="wrapper">
  <div id="main_slide">
    <ul class="slider">
      <!-- BEGIN: row -->
      <li>
      	<a href="{row.link}">
        	<img src="{row.picture}" alt="{row.title}"/>
        	<div class="slider-info">
          	<h3>{row.title}</h3>
            <div class="short">{row.short}</div>
            <div class="view-deital">{LANG.home.btn_detail}</div>
          </div>
        </a>
      </li>
      <!-- END: row -->
    </ul>
  </div>
</div>
<script language="javascript">
	jQuery(document).ready(function($){
		$('#main_slide .slider').bxSlider({
			controls:	false,
			pager:false,
			auto:	true,
			mode:	'fade',
			//autoHover: true,
			pause: 4000,
			autoDelay: 2000,
			speed:	800
		});
	});
</script>
<!-- END: main_slide -->

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
      <div class="col_item-info">
      	<h3><a href="{col.link}" title="{col.title}">{LANG.global.series}: {col.item_code}</a></h3>
        <div class="price_buy"><span class="auto_price">{col.price_buy}</span></div>
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