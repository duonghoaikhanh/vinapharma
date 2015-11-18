<?php

/*================================================================================*\
Name code : view.php
Copyright © 2015  by Phan Van Lien
@version : 1.0
@date upgrade : 01/01/2015 by Phan Van Lien
\*================================================================================*/

if (! defined('IN_ttH')) {
  die('Access denied');
}
$nts = new sMain();

class sMain
{
  var $modules = "faq";
	var $action = "faq";
	var $folder_upload = "faq";
	var $dir = "";
	var $dbtable = "faq";
	var $dbtable_id = "item_id";
	var $tbl_name = "faq";
	var $arr_element = array(
		'group_id' => array('form_type' => 'select', 'title' => 'select_title'),
		'group_related' => array('form_type' => 'select', 'muti' => 1),
		'title' => array('form_type' => 'text', 'required' => '', 'of_lang' => true),

		'content' => array('form_type' => 'editor', 'of_lang' => true),
		'admin_reply' => array('form_type' => 'editor', 'of_lang' => true),
		'is_focus' => array('form_type' => 'checkbox'),
		'status' => array('form_type' => 'checkbox'),

		'show_order' => array('auto' => 0, 'only' => 'add'),
		'is_show' => array('auto' => 1, 'only' => 'add'),
		'date_create' => array('auto' => 'time', 'only' => 'add'),
		'date_update' => array('auto' => 'time'),
		'lang' => array('of_lang' => true)
	);
	
  /**
   * function sMain ()
   * Khoi tao 
   **/
	function sMain ()
	{
		global $ttH;

		include ($this->modules."_func.php");		
		$this->dir = create_folder(date("Y_m"));
		
		require_once('modules/common/include/faq_item.php');
	}
  // end class
}
?>