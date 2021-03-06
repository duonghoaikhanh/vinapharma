<!-- BEGIN: main -->
<div class="row">
  <div class="col-lg-12">
    <h1>{data.page_title}</h1>
    <ol class="breadcrumb">
      <li><a href="{data.link_manage}" {data.class.manage}><i class="fa fa-th-list"></i> {LANG.global.manage}</a></li>
      <li><a href="{data.link_manage_trash}" {data.class.manage_trash}><i class="fa fa-trash-o"></i> {LANG.global.trash}</a></li>
      <li><a href="{data.link_add}" {data.class.add}><i class="fa fa-edit"></i> {LANG.global.add}</a></li>
    </ol>
  </div>
</div>
{data.main}
<!-- END: main -->

<!-- BEGIN: edit -->
<form action="{data.link_action}" method="post" enctype="multipart/form-data" name="myForm" id="myForm" role="form">
  <div class="row">
    <div class="col-md-12">{data.err}</div>
  </div>
  <div class="row">
    <!-- BEGIN: element -->
    {row.before}
    <div class="col-md-{row.form_col}">
      <div class="form-group">
        <!-- BEGIN: title -->
        <label>{row.title}</label>
        <!-- END: title -->
        {row.content}
      </div>
    </div>

    <!-- END: element -->
  </div>
  <div class="row" align="center">
    <input type="hidden" name="do_submit"	 value="1" />
    <button type="submit" class="btn btn-default">{LANG.global.btn_submit}</button>
    <button type="reset" class="btn btn-default">{LANG.global.btn_reset}</button>
  </div>
</form>
<!-- END: edit -->

<!-- BEGIN: manage -->
<div class="panel panel-default panel_toggle {data.form_search_class}">
  <div class="panel-heading">
    <h3 class="panel-title">{LANG.global.box_search}</h3>
    <a class="toggle">&nbsp;</a>
  </div>
  <div class="panel-body">
    <div class="box_search">
      <form action="{data.link_action}" method="post" name="form_search" id="form_search">
        <div class="row_search">
          <!-- BEGIN: element -->
          <div class="col_search"><label>{row.title}:</label> {row.content}</div>
          <!-- END: element -->
          <div class="col_search"><label>{LANG.global.date_begin}:</label> <input name="search_date_begin" type="text" size="20" maxlength="150" value="{data.search_date_begin}" class="form-control datepicker"></div>
          <div class="col_search"><label>{LANG.global.date_end}:</label> <input name="search_date_end" type="text" size="20" maxlength="150" value="{data.search_date_end}" class="form-control datepicker"></div>
          <div class="col_search"><label>{LANG.global.text_search}:</label>
            <div class="form-group input-group">
              <input name="search_title" type="text" size="20" maxlength="150" value="{data.search_title}" class="form-control">
              <span class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="row_search">
          <button class="btn btn-default btn-sm btn-block" type="submit">{LANG.global.btn_search}</button>
        </div>
        <input name="search" type="hidden" value="1" />
      </form>
      <div class="clear"></div>
    </div>
  </div>
</div>
{data.err}
<form action="{data.link_action}" method="post" name="manage" id="manage">
  <div class="row">
    <div class="col-lg-12">
      <div class="table_btn table_btn_top">
        <img class="icon_arrow" src="{DIR_IMAGE}arrow_down.png" />
        <button type="button" class="btn btn-default" onclick="do_submit('do_edit')" value="{LANG.global.btn_update}" name="btnEdit">{LANG.global.btn_update}</button>
        <!-- BEGIN: button_trash -->
        <button type="button" class="btn btn-default" onclick="do_submit_alert('do_duplicate', '{LANG.global.are_you_sure_duplicate}')" value="{LANG.global.duplicate}" name="btnTrash">{LANG.global.duplicate}</button>
        <button type="button" class="btn btn-default" onclick="do_submit_alert('do_trash', '{LANG.global.are_you_sure_trash}')" value="{LANG.global.btn_trash}" name="btnTrash">{LANG.global.btn_trash}</button>
        <!-- END: button_trash -->
        <!-- BEGIN: button_manage -->
        <button type="button" class="btn btn-default" onclick="do_submit_alert('do_restore', '{LANG.global.are_you_sure_restore}')" value="{LANG.global.btn_restore}" name="btnRestore">{LANG.global.btn_restore}</button>
        <button type="button" class="btn btn-default" onclick="do_submit_alert('do_del', '{LANG.global.are_you_sure_del}')" value="{LANG.global.btn_del}" name="btnDel">{LANG.global.btn_del}</button>
        <!-- END: button_manage -->
        <div class="clear"></div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered table-hover table-striped table_row">
          <thead>
          <tr >
            <th class="header" width="3%"><input id="checkall" class="checkbox" type="checkbox" name="checkall" value="all"/></th>
            <th class="header" width="5%">{data.f_id}</th>
            <th class="header" width="10%">{data.f_show_order}</th>

            <th class="header" >{data.f_title}</th>
            <th class="header" width="30%">{LANG.global.info}</th>

            <th class="header" width="10%">{LANG.global.action}</th>
          </tr>
          </thead>
          <tbody>
          <!-- BEGIN: row_item -->
          <tr id="row_{row.item_id}">
            <td class="cot" align="center"><input class="checkbox" type="checkbox" value="{row.item_id}" name="selected_id[]"></td>
            <td class="cot" align="center">{row.item_id}</td>
            <td class="cot" align="center"><input type="text" value="{row.show_order}" name="show_order[{row.item_id}]" size="4" style="text-align:center;" onchange="do_check ({row.item_id})"></td>

            <td class="cot">
              {row.title}
              <div><strong>Menu active:</strong> {row.name_action}</div>

            </td>
            <td class="cot">
              <div><strong>{LANG.global.group}:</strong> {row.group_name}</div>
              <div><strong>{LANG.global.date_create}:</strong> {row.date_create}</div>
              {row.html_checkbox}
            </td>

            <td class="cot" align="center">
              {row.manage_act.edit}
              {row.manage_act.pic}
              {row.manage_act.add_menu}
              <!-- BEGIN: row_button_trash -->
              {row.manage_act.duplicate}
              {row.manage_act.trash}
              <!-- END: row_button_trash -->
              <!-- BEGIN: row_button_manage -->
              {row.manage_act.restore}
              {row.manage_act.del}
              <!-- END: row_button_manage -->
            </td>
          </tr>
          <!-- END: row_item -->
          <!-- BEGIN: row_empty -->
          <tr class="warning">
            <td align="center" colspan="7">{row.mess}</td>
          </tr>
          <!-- END: row_empty -->
          </tbody>
        </table>
      </div>
      <div class="table_btn table_btn_buttom">
        <img class="icon_arrow" src="{DIR_IMAGE}arrow_up.png" />
        <button type="button" class="btn btn-default" onclick="do_submit('do_edit')" value="{LANG.global.btn_update}" name="btnEdit">{LANG.global.btn_update}</button>
        <!-- BEGIN: button_trash -->
        <!-- END: button_trash -->
        <!-- BEGIN: button_manage -->
        <!-- END: button_manage -->
        <div class="clear"></div>
      </div>
      <div class="table_nav">{data.nav}</div>
      <input id="do_action" type="hidden" value="" name="do_action">
    </div>
  </div>
</form>
<!-- END: manage --> 