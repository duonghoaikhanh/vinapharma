<!-- BEGIN: main -->
<div class="container">
    <div class="row">
        {data.content}
        {data.block_column}
    </div>
</div>
<!-- END: main --> 

<!-- BEGIN: contact_info -->
<div id="contact_info"><div class="content">{data.content}</div></div>
<!-- END: contact_info --> 

<!-- BEGIN: html_contact --> 
<div class="col-xs-12 col-sm-9 noleft">
    <div id="contact">
        <div class="box_w">
            <ol class="breadcrumb">
                <li><a href="http://jexmax.com.vn/">Trang chủ</a></li>
                <li class="active">Liên hệ</li>
            </ol>
            <h1 class="head_title">Liên hệ</h1>
            <div class="contact_maps">
                <div class="contact_map_bg"><div id="map_view"></div></div>
                {data.contact_map}
            </div>
            <div class="contact_info">
                {data.contact_info}
            </div>
        </div>
        <div class="box_w">
            <div class="head_title">Ý kiến bạn đọc</div>
            <div class="msg_contact"></div>
            <div class="contact_box">
                <form method="post" id="form_contact" name="form_contact" enctype="multipart/form-data" action="{data.link_action}">
                    <div class="form_contact">
                        <div class="col-xs-6 noleft">
                            <input id="username" name="full_name" type="text" maxlength="250" value="{data.full_name}" class="input_text" placeholder="Họ và tên của bạn">
                            <input id="phone" name="phone" type="text" maxlength="250" value="{data.phone}" class="input_text" placeholder="Điện thoại liên hệ">
                        </div>
                        <div class="col-xs-6 noright">
                            <input id="address" name="address" type="text" maxlength="250" value="{data.address}" class="input_text" placeholder="Địa chỉ liên hệ">
                            <input id="email" name="email" type="text" maxlength="250" value="{data.email}" class="input_text" placeholder="Email">
                        </div>
                        <div class="col-xs-12 noleft noright">
                            <input id="title" name="title" type="text" maxlength="250" value="{data.title}" class="input_text" placeholder="Tiêu đề">
                            <textarea id="content_contact" name="title" type="text" maxlength="250" value="{data.title}" class="input_text" placeholder="Nội dung"></textarea>
                            <input type="submit" class="btn" value="{LANG.contact.btn_send}" />
                        </div>
                    </div><!--end .form_contact-->
                    <input type="hidden" name="save" value="1">
                    <br clear="all">
                </form>
                <script language="javascript">ttHGlobal.contact('form_contact');</script>
            </div>
        </div>
        <br clear="all">
    </div>

    <div class="clear"></div>

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

<!-- END: html_contact -->