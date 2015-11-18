<?php

/*================================================================================*\
Name code : class_functions.php
Copyright © 2013 by Phan Van Lien
@version : 1.0
@date upgrade : 03/02/2013 by Phan Van Lien
\*================================================================================*/

if (! defined('IN_ttH')) {
  die('Access denied');
}

$ttH->conf['cur_act'] = (isset($ttH->conf['cur_act'])) ? $ttH->conf['cur_act'] : "faq";

function load_setting ()
{
	global $ttH;
	
	$ttH->setting = (isset($ttH->setting)) ? $ttH->setting : array();
	if(!isset($ttH->setting['faq'])){
		$ttH->setting['faq'] = array();
		$result = $ttH->db->query("select * from faq_setting ");
		while($row = $ttH->db->fetch_row($result)){
			$ttH->setting['faq_'.$row['lang']] = $row;
			if($ttH->conf['lang_cur'] == $row['lang']) {
				$ttH->setting['faq'] = $row;
			}
		}
	}
	
	$ttH->data['faq_group'] = (isset($ttH->data['faq_group'])) ? $ttH->data['faq_group'] : array();
	$query = "select group_id, title, friendly_link 
				from faq_group
				where is_show=1 
				and lang='".$ttH->conf['lang_cur']."' 
				order by show_order desc, date_create asc";
	//echo '<br />query='.$query;
	$result = $ttH->db->query($query);
	if($num = $ttH->db->num_rows($result)){
		while($row = $ttH->db->fetch_row($result)){
			$ttH->data['faq_group'][$row['group_id']] = $row;
		}
	}
	
	return true;
}
load_setting ();


if($ttH->conf['cur_act'] == "group" && !empty($ttH->conf['cur_act_id'])) {
	$result = $ttH->db->query("select *  
	 							from faq_group
								where lang='".$ttH->conf['lang_cur']."' 
								and group_id='".$ttH->conf['cur_act_id']."' 
								limit 0,1");
	if($row = $ttH->db->fetch_row($result)){
		$row['content'] = $ttH->func->input_editor_decode($row['content']);
		$ttH->conf['cur_act'] = "faq";
		$ttH->conf['cur_group'] = $row['group_id'];
		$ttH->data['cur_group'] = $row;
	}
}elseif($ttH->conf['cur_act'] == "detail" && !empty($ttH->conf['cur_act_id'])) {
	$result = $ttH->db->query("select *  
							from faq
							where lang='".$ttH->conf['lang_cur']."' 
							and item_id='".$ttH->conf['cur_act_id']."' 
							limit 0,1");
	if($row = $ttH->db->fetch_row($result)){
		$row['content'] = $ttH->func->input_editor_decode($row['content']);
		$ttH->conf['cur_act'] = "faq";
		$ttH->conf['cur_item'] = $row['item_id'];
		$ttH->data['cur_item'] = $row;
	}
}

/*print_arr($ttH->conf);
die();*/
?>