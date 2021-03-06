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
  var $modules = "product";
	var $action = "product";
	var $folder_upload = "product";
	var $dir = "";
	var $dbtable = "product";
	var $dbtable_id = "item_id";
	var $tbl_name = "item";
	var $arr_element = array(
		'group_id' => array('form_type' => 'select', 'title' => 'select_title'),
		'group_related' => array('form_type' => 'select', 'muti' => 1),
		'item_code' => array('form_type' => 'code', 'form_col' => 3, 'required' => array('exit'), 'of_lang' => true),
		'title' => array('form_type' => 'text', 'form_col' => 9, 'required' => '', 'of_lang' => true),
		'picture' => array('form_type' => 'picture'),
		'price' => array('form_type' => 'price', 'form_col' => 3, 'required' => array('gte' => 0)),
		'price_buy' => array('form_type' => 'price', 'form_col' => 3, 'required' => array('lte' => 'price')),
		'percent_discount' => array('auto' => 'discount', 'discount' => array('price' => 'price_buy')),
		'short' => array('form_type' => 'editor', 'editor' => 'mini', 'of_lang' => true),
		'content' => array('form_type' => 'editor', 'of_lang' => true),
		'is_focus' => array('form_type' => 'checkbox'),
		'arr_option' => array('form_type' => 'input_option', 'form_col' => 12, 'function_call' => 'list_input_option', 'use_title' => false, 'of_lang' => true),
		'friendly_link' => array('form_type' => 'friendly_link', 'of_lang' => true),
		'meta_title' => array('form_type' => 'meta_title', 'of_lang' => true),
		'meta_key' => array('form_type' => 'meta_key', 'of_lang' => true),
		'meta_desc' => array('form_type' => 'meta_desc', 'of_lang' => true),
		'show_order' => array('auto' => 0, 'only' => 'add'),
		'is_show' => array('auto' => 1, 'only' => 'add'),
		'date_create' => array('auto' => 'time', 'only' => 'add'),
		'date_update' => array('auto' => 'time'),
		'lang' => array('of_lang' => true)
	);
	
	var $arr_manage_act = array(
		'add_menu' => array(),
		'pic' => array(),
		'edit' => array(),
		'duplicate' => array(),
		'trash' => array(),
		'restore' => array(),
		'del' => array()
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
		
		require_once('modules/common/include/item.php');
	}
  // end class
}
?>