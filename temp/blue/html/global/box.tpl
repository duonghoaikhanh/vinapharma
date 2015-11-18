<!-- BEGIN: box_main -->
<div class="box_mid css_bo">
	<div class="box_mid-title">
  	<div class="mid_title-line"></div>
  	<span><h1 class="mid_title_l head_title">{data.title}</h1></span>
    <div class="mid_title_r">{data.more_title}</div>
    <div class="clear"></div>
  </div>
  <div class="box_mid-content">{data.content}</div>
</div>
<!-- END: box_main -->

<!-- BEGIN: box_main_focus -->
<div class="box_mid css_bo">
  <div class="box_mid-title">
    <div class="mid_title-line"></div>
    <span><h1 class="mid_title_l">{data.title}</h1></span>
    <div class="mid_title_r">{data.more_title}</div>
    <div class="clear"></div>
  </div>
  <div class="box_mid-content">{data.content}</div>
</div>
<!-- END: box_main_focus -->

<!-- BEGIN: box_mid -->
<div class="box_mid">
	<div class="box_mid-title">
  	<div class="mid_title-line"></div>
  	<span><h2 class="mid_title_l">{data.title}</h2></span>
    <div class="mid_title_r">{data.more_title}</div>
    <div class="clear"></div>
  </div>
  <div class="box_mid-content">{data.content}</div>
</div>
<!-- END: box_mid -->

<!-- BEGIN: box -->
<div class="box bo_css {data.class_box}">
	<div class="box-title">
  	<div class="box-title-icon"></div>
    <div class="box-titleb">{data.title}</div>
  </div>
  <div class="box-content">{data.content}</div>
</div>
<!-- END: box -->

<!-- BEGIN: box_notitle -->
<div class="box bo_css {data.class_box}">
  <div class="box-content">{data.content}</div>
</div>
<!-- END: box_notitle -->

<!-- BEGIN: box_menu -->
<div class="box_menu">
	<div class="box_menu-title">
  	<div class="box_menu-title-icon"></div>
    <div class="box_menu-titleb">{data.title}</div>
  </div>
  <div class="box-content">
    <!-- BEGIN: menu_sub -->
    <ul class="list_none">
      {data.content}
      <!-- BEGIN: row -->
      <li {row.class_li}><a href="{row.link}" {row.class} {row.attr_link}>{row.title}</a>{row.menu_sub}</li>
      <!-- END: row -->
    </ul>
    <!-- END: menu_sub -->
  </div>
</div>
<!-- END: box_menu -->

<!-- BEGIN: group_news -->
<div class="box_tintuc">
  <h3><a href="tin-tuc5"><span>{LANG.global.box_news}</span></a></h3>
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
    {row.line}
    <!-- END: row -->
  </div>

  <a class="view_all" href="tin-tuc-c1.html">Xem tiếp</a>
  <div class="box_b"><span></span></div>
</div>
<!-- END: group_news -->

<!-- BEGIN: group_news_focus -->
<div class="box_chamsoc">
  <h3><a href="hoat-dong-cua-jex-max" ><span>{LANG.global.action_clinova}</span></a></h3>
  <div class="content">
    <div id="owl-hdnh" class="owl-carousel">

      <!-- BEGIN: row -->
      <div class="item skyBlue">
        <a  href="{row.link}" ><img  style="max-width:100%;" class="img1" src="{row.picture}" /></a>
        <a class="box_title"  href="{row.link}">{row.title}</a>
        {row.short}
      </div>
      <!-- END: row -->

    </div>
  </div>
  <a class="view_all" href="hoat-dong-nhan-hang.html">Chi tiết</a>
  <div class="box_b"><span></span></div>
</div>
<!-- END: group_news_focus -->

<!-- BEGIN: box_search -->
<div class="form_search_desk">
  <form action="{data.link_search}" method="post">
    <input name="text_search" class="text_search" type="text" value="{data.text_search}" onBlur="if(this.value=='') this.value='{LANG.global.search_text}';" onFocus="if(this.value=='{LANG.global.search_text}') this.value='';">
    <input name="search" value="1" type="hidden" />
    <input type="submit" name="btnSubmit" value="" />
  </form>
</div>
<!-- END: box_search -->

<!-- BEGIN: main_search -->
<div class="main_search">
	<h1 class="main_search-title">{data.title}</h1>
  <div class="main_search-content">
    <form action="{data.link_search}" method="post">
      <div>
        <input id="text_search" name="text_search" class="text_search" type="text" value="{data.text_search}" onBlur="if(this.value=='') this.value='{LANG.global.search_text}';" onFocus="if(this.value=='{LANG.global.search_text}') this.value='';">
      </div>
      <input name="search" value="1" type="hidden" />
      <input class="btn_search" type="image" src="{DIR_IMAGE}btn_search.png" value="{LANG.global.search_btn}" />
    </form>
  </div>
  <script language="javascript">
		$('.main_search .main_search-content').css({'padding-left':$('.main_search .main_search-title').width()+40});
	</script>
</div>
<!-- END: main_search -->

<!-- BEGIN: mid_search -->
<div class="main_search">
	<h2 class="main_search-title">{data.title}</h2>
  <div class="main_search-content">
    <form action="{data.link_search}" method="post">
      <div>
        <input id="text_search" name="text_search" class="text_search" type="text" value="{data.text_search}" onBlur="if(this.value=='') this.value='{LANG.global.search_text}';" onFocus="if(this.value=='{LANG.global.search_text}') this.value='';">
      </div>
      <input name="search" value="1" type="hidden" />
      <input class="btn_search" type="image" src="{DIR_IMAGE}btn_search.png" value="{LANG.global.search_btn}" />
    </form>
  </div>
  <script language="javascript">
		$('.main_search .main_search-content').css({'padding-left':$('.main_search .main_search-title').width()+40});
	</script>
</div>
<!-- END: mid_search -->

<!-- BEGIN: box_support_old -->
<div class="box box_support">
	<div class="box-title">
  	<div class="box-title-icon"></div>
    <div class="box-titleb">{data.title}</div>
  </div>
  <div class="box-content">
  	<a href="javascript:void(0)" onClick="window.open('{data.link_support}','','toolbar=no, scrollbars=yes, resizable=no, top=100, left=200, width=300, height=400');" class="yahoo"><img src="{DIR_IMAGE}yahoo.png" alt="yahoo" /></a>
  	<a href="javascript:void(0)" onClick="window.open('{data.link_support}','','toolbar=no, scrollbars=yes, resizable=no, top=100, left=200, width=300, height=400');" class="skype"><img src="{DIR_IMAGE}skype.png" alt="skype" /></a>
    <img class="hotline" src="{DIR_IMAGE}hotline.gif" alt="08.6676.1688-08.6293.3336" />
  </div>
</div>
<!-- END: box_support_old -->

<!-- BEGIN: box_support -->
<div class="box_support">
	<div class="arrow"></div>
  <!-- BEGIN: row -->
  <div class="row">
    <!-- BEGIN: yahoo -->
    <div class="nick yahoo" data-nick="{row.yahoo}" nick_type="yahoo">
      <div><a class="pic" href="ymsgr:sendIM?{row.yahoo}"><img src='{DIR_IMAGE}icon_yahoo_on.png' alt="{row.yahoo}" /></a></div>
      <div><a class="title" href="ymsgr:sendIM?{row.yahoo}">{row.title}</a></div>
      <div class="clear"></div>
    </div>
    <!-- END: yahoo -->
    <!-- BEGIN: skype -->
    <div class="nick skype" data-nick="{row.skype}" nick_type="skype">
      <div><a class="pic" href="Skype:{row.skype}?chat"><img src="http://mystatus.skype.com/mediumicon/{row.skype}" alt="{row.skype}" height="16" /></a></div>
      <div><a class="title" href="Skype:{row.skype}?chat">{row.skype}</a></div>
      <div class="clear"></div>
    </div>
    <!-- END: skype -->
    <div class="clear"></div>
  </div>
  <!-- END: row -->
  <div class="support_tool">
    <div class="support_web">{data.support_web}</div>
    <div class="clear"></div>
  </div>
</div>
<!-- END: box_support -->

<!-- BEGIN: box_statistic -->
<div class="box bo_css box_statistic">
	<div class="box-title">
  	<div class="box-title-icon"></div>
    <div class="box-titleb">{LANG.global.box_statistic}</div>
  </div>
  <div class="box-content">
  	<script language="javascript">ttHStatistic.config = ({"full_zero" : false,"split_char" : true});</script>
    <div id="tth-statistic" class="statistic_content">
      <div class="row row_online">
        <div class="col col_title">{LANG.global.current_visitors}</div>
        <div class="col col_mid">:</div>
        <div class="col col_content" id="tth-online"></div>
        <div class="clear"></div>
      </div>
      <div class="row row_visitors">
        <div class="col col_title">{LANG.global.visitors}</div>
        <div class="col col_mid">:</div>
        <div class="col col_content" id="tth-total"></div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</div>
<!-- END: box_statistic -->

<!-- BEGIN: form_signin -->
<form id="{data.form_id_pre}form_signin" name="{data.form_id_pre}form_signin" method="post" action="{data.link_action}" onSubmit="return false" >
  <div class="form_mess"></div>
  <div class="row">
    <label class="title">{LANG.global.username}</label>
    <input name="username" type="text" maxlength="100" value="{data.username}" class="input_text" />
    <div class="clear"></div>
  </div>
  <div class="row">
    <label class="title">{LANG.global.password}</label>
    <input name="password" type="password" maxlength="100" value="{data.password}" class="input_text" />
    <div class="clear"></div>
  </div>
  <div class="row_btn">
    <input type="hidden" name="do_submit"	 value="1" />
    <input type="submit" class="btn" value="{LANG.global.btn_signin}" />
  </div>
  <div class="forget_password">
  	<a href="{data.link_forget_password}" target="_top">{LANG.global.forget_password}</a>
  </div>
  <div class="clear"></div>
</form>
<script language="javascript">
	ttHUser.signin('{data.form_id_pre}form_signin', '{data.link_login_go}');
</script>
<!-- END: form_signin -->

<!-- BEGIN: form_signup -->
<form id="{data.form_id_pre}form_signup" name="{data.form_id_pre}form_signup" method="post" action="{data.link_action}" onSubmit="return false" >
  <div class="form_mess"></div>
  <div class="row_l">
    <div class="row">
      <label class="title">{LANG.global.username}</label>
      <input name="username" type="text" maxlength="100" value="{data.username}" class="input_text" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.password}</label>
      <input id="{data.form_id_pre}password" name="password" type="password" maxlength="100" value="{data.password}" class="input_text" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.re_password}</label>
      <input name="re_password" type="password" maxlength="100" value="{data.re_password}" class="input_text" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.nickname}</label>
      <input name="nickname" type="text" maxlength="100" value="{data.nickname}" class="input_text" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.phone}</label>
      <input name="phone" type="text" maxlength="100" value="{data.phone}" class="input_text" />
      <div class="clear"></div>
    </div>
  </div>
  <div class="row_r">
    <div class="row">
      <label class="title">{LANG.global.address}</label>
      <input name="address" type="text" maxlength="100" value="{data.address}" class="input_text" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.province}</label>
      {data.list_location_province}
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.district}</label>
      {data.list_location_district}
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title">{LANG.global.ward}</label>
      {data.list_location_ward}
      <div class="clear"></div>
    </div>
    <div class="row">
      <label class="title"><img src="{data.link_root}ajax.php?m=global&f=captcha" alt="captcha" /></label>
      <input name="captcha" type="text" maxlength="6" value="" class="input_text" />
      <div class="clear"></div>
    </div>
  </div>
  <div class="clear"></div>
  <div class="row_btn">
    <input type="hidden" name="do_submit"	 value="1" />
    <input type="submit" class="btn" value="{LANG.global.btn_signup}" />
  </div>
</form>
<script language="javascript">
	ttHLocation.list_location_province_load_child();
	ttHLocation.list_location_district_load_child();
	ttHUser.signup('{data.form_id_pre}form_signup', '{data.link_login_go}');
</script>
<!-- END: form_signup -->

<!-- BEGIN: form_signup_user -->
<form id="{data.form_id_pre}form_signup" name="{data.form_id_pre}form_signup" method="post" action="{data.link_action}" onSubmit="return false" >
  <div class="form_mess"></div>
  <div class="row_l">
    <div class="row">
      <input name="username" type="text" maxlength="100" value="{data.username}" class="input_text" placeholder="{LANG.global.username}" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <input id="{data.form_id_pre}password" name="password" type="password" maxlength="100" value="{data.password}" class="input_text" placeholder="{LANG.global.password}" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <input name="re_password" type="password" maxlength="100" value="{data.re_password}" class="input_text" placeholder="{LANG.global.re_password}" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <input name="nickname" type="text" maxlength="100" value="{data.nickname}" class="input_text" placeholder="{LANG.global.nickname}" />
      <div class="clear"></div>
    </div>
    <div class="row">
      <input name="phone" type="text" maxlength="100" value="{data.phone}" class="input_text" placeholder="{LANG.global.phone}" />
      <div class="clear"></div>
    </div>
  </div>
  <div class="row_r">
    <div class="row">
      <input name="address" type="text" maxlength="100" value="{data.address}" class="input_text" placeholder="{LANG.global.address}" />
      <div class="clear"></div>
    </div>
    <div class="row">
      {data.list_location_province}
      <div class="clear"></div>
    </div>
    <div class="row">
      {data.list_location_district}
      <div class="clear"></div>
    </div>
    <div class="row">
      {data.list_location_ward}
      <div class="clear"></div>
    </div>
    <div class="row">
      <img src="{data.link_root}ajax.php?m=global&f=captcha" alt="captcha" />
      <input name="captcha" type="text" maxlength="6" value="" class="input_text captcha" />
      <div class="clear"></div>
    </div>
  </div>
  <div class="clear"></div>
  <div class="row_btn">
    <input type="hidden" name="do_submit"	 value="1" />
    <input type="submit" class="btn" value="{LANG.global.btn_signup}" />
  </div>
</form>
<script language="javascript">
	ttHLocation.list_location_province_load_child();
	ttHLocation.list_location_district_load_child();
	ttHUser.signup('{data.form_id_pre}form_signup', '{data.link_login_go}');
</script>
<!-- END: form_signup_user -->

<!-- BEGIN: html_navigation -->
<ol class="breadcrumb">
    <!-- BEGIN: row -->
        <li {row.class}><a href="{row.link}" {row.class}>{row.title}</a></li>
    <!-- END: row -->

</ol>
<!-- END: html_navigation -->

<!-- BEGIN: html_navigation1 -->
<div class="tth_navigation">
    <ul>
        <!-- BEGIN: row -->
        <li {row.class_li}><a href="{row.link}" {row.class}>{row.title}</a></li>
        <!-- END: row -->
    </ul>
    <div class="clear"></div>
</div>
<!-- END: html_navigation1 -->

<!-- BEGIN: html_list_share -->
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
    </div>
</div>
<br clear="all">
<!-- END: html_list_share -->

<!-- BEGIN: html_alert_info -->
<div class="alert alert-info alert-dismissable">
    {data.mess}
</div>
<!-- END: html_alert_info -->

<!-- BEGIN: html_alert_error -->
<div class="alert alert-danger alert-dismissable">
    {data.mess}
</div>
<!-- END: html_alert_error -->

<!-- BEGIN: html_alert_warning -->
<div class="alert alert-warning alert-dismissable">
    {data.mess}
</div>
<!-- END: html_alert_warning -->

<!-- BEGIN: html_alert_success -->
<div class="alert alert-success alert-dismissable">
    {data.mess}
</div>
<!-- END: html_alert_success -->

<!-- BEGIN: alert -->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{CONF.page_title}</title>
  </head>

  <body>
  {data.content}
  </body>
</html>
<!-- END: alert -->