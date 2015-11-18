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
<div class="faq_focus">
	<div class="faq_focus-title">
  	<a href="{row.link}" title="{row.title}">{row.title}</a> <span class="date">({row.date_update})</span>
  </div>
	<div class="img"><a href="{row.link}" title="{row.title}"><img src="{row.picture}" alt="{row.title}" title="{row.title}" /></a></div>
	<div class="short">{row.short}</div>
	<div class="view_detail"><a href="{row.link}" title="{row.title}">{LANG.faq.view_detail}</a></div>
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
<div class="col-xs-12 col-sm-12">
    <div class="row question_list">
        <div class="question_bar">
            <div class="bar_content">
                <a class="btn_sendQuestion" href="http://jexmax.com.vn/hoi-dap.html">Câu hỏi thường gặp</a>
                <span class="line"></span>
                <a class="btn_sendQuestion" href="http://jexmax.com.vn/cau-hoi.html">Câu hỏi tư vấn</a>
            <span class="search_q">
                <form action="http://jexmax.com.vn/hoi-dap.html" method="post">
                <span class="search_q_content"><input type="text" name="search_qu" placeholder="nhập từ khóa...">
                <input type="submit" value="go">
                </span>
                </form>
            </span>
            </div>
        </div>
        <div>
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                <!-- BEGIN: item -->
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="head{item.stt}">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#cauhoi{item.stt}" aria-expanded="true" aria-controls="collapse{item.stt}">
                                <span class="stt pull-left">{item.stt}.</span>
                                {item.content}<span class="view_all">Chi tiết</span>
                            </a>
                        </h4>
                    </div>
                    <div id="cauhoi{item.stt}" class="panel-collapse collapse {item.in}" role="tabpanel" aria-labelledby="head{item.stt}">
                        <div class="panel-body">
                            <div class="answer_ques">
                                <a class="avatar" title="Ưu điểm của JEX MAX so với JEX?" href="http://jexmax.com.vn/hoi-dap/uu-diem-cua-jex-max-so-voi-jex-a5820.html"><img src="http://jexmax.com.vn/uploads/nopic_question.png" style="border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px;"></a>
                                <b>{LANG.faq.admin_replace}</b>
                                <div class="answer"><p>{item.admin_reply}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: item -->

            </div>
        </div>
        {data.nav}

    </div>
</div>

<div class="col-xs-12 col-sm-12">
    <!-- view form -->
    <div class="form_question right">
        <h3 class="head_title_form">GỬI CÂU HỎI</h3>
        <div class="comment_box">
            <form id="form_question" action="" enctype="multipart/form-data" name="form_contact" method="post" novalidate="novalidate">
                <div class="col-xs-12 noleft noright">
                    <input name="name" id="name" type="text" size="45" placeholder="Họ và tên của bạn">
                </div>
                <div class="col-xs-12 noleft noright">
                    <input type="text" name="email" value="" size="45" placeholder="Email">
                </div>
                <div class="col-xs-12 noleft noright">
                    <input type="text" name="title" value="" size="45" placeholder="Tiêu đề">
                </div>
                <div class="col-xs-12 noleft noright">
                    <textarea name="content" value="" cols="45" rows="6" placeholder="Nội dung"></textarea>
                </div>
                <div class="col-xs-12 noleft noright">
                    <input type="submit" value="Gửi" name="save" id="btnSubmit">
                </div>
            </form>
            <script language="javascript">ttHGlobal.add_question('form_question');</script>
        </div>
    </div>
    <!-- end view form -->
</div>
<br clear="all">



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
      <a href="{col.link}" class="view_detail" title="{col.title}">{LANG.faq.view_detail}</a>
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
                    <span class="readmore">{LANG.faq.detail}</span>
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
    <div class="list_other-title">{LANG.faq.other_faq}</div>
    <ul>
        <!-- BEGIN: row -->
        <li><a href="{row.link}" title="{row.title}">{row.title}</a> <span class="date">({row.date_update})</span></li>
        <!-- END: row -->
    </ul>
</div>
<!-- END: list_other1 -->