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
	var $modules = "page";
	var $action = "page";
	var $sub = "manage";
	
	/**
	* function sMain ()
	* Khoi tao 
	**/
	function sMain ()
	{
		global $ttH;

		$ttH->func->load_language($this->modules);
		$ttH->temp_act = new XTemplate($ttH->path_html.$this->modules.DS.$this->action.".tpl");
		$ttH->temp_act->assign('CONF', $ttH->conf);
		$ttH->temp_act->assign('LANG', $ttH->lang);
		$ttH->temp_act->assign('DIR_IMAGE', $ttH->dir_images);
		
		$ttH->func->include_css ($ttH->dir_css.$this->modules.'/'.$this->action.".css");
		
		$ttH->conf['menu_action'] = array($this->modules);
		$ttH->data['link_lang'] = (isset($ttH->data['link_lang'])) ? $ttH->data['link_lang'] : array();

		include ($this->modules."_func.php");
		
		$data = array();
		if(isset($ttH->conf['cur_group'])){
			$result = $ttH->db->query("select group_id, group_nav, type_show, num_show, is_show   
										from page_group 
										where group_id='".$ttH->conf['cur_group']."' 
										and is_show=1 
										limit 0,1");
			if($row = $ttH->db->fetch_row($result)){

				//Current menu
				$arr_group_nav = (!empty($row["group_nav"])) ? explode(',',$row["group_nav"]) : array();
				foreach($arr_group_nav as $v) {
					$ttH->conf['menu_action'][] = $this->modules.'-group-'.$v;
				}
				//End current menu
				$ttH->conf["cur_group_nav"] = $row["group_nav"];	
				
				//Make link lang
				$result = $ttH->db->query("select friendly_link,lang   
											from page_group 
											where group_id='".$ttH->conf['cur_group']."' ");
				while($row_lang = $ttH->db->fetch_row($result)){
					$ttH->data['link_lang'][$row_lang['lang']] = $ttH->site->get_link_lang ($row_lang['lang'], $this->modules, $row_lang['friendly_link']);
				}
				//End Make link lang
				//SEO
				$ttH->site->get_seo ($ttH->data['cur_group']);
				
				$ttH->navigation = $ttH->site->html_arr_navigation (array(
					array(
						'title' => $ttH->lang['global']['homepage'],
						'link' => $ttH->site->get_link ('home')
					),
					array(
						'title' => $ttH->data['page_group'][$ttH->conf['cur_group']]['title'],
						'link' => $ttH->site->get_link ('page',$ttH->data['page_group'][$ttH->conf['cur_group']]['friendly_link'])
					)
				));

				$data = array();
				$data['main_search'] = $ttH->site->main_search ($ttH->data['cur_group']['title']);
				$data['content'] = $this->do_list_group($row, $ttH->data['cur_group']);
                $result_redirect = $ttH->db->query("select *
                                                from page
                                                where is_show=1
                                                and group_id = ".$ttH->conf['cur_group']."
                                                and lang='".$ttH->conf["lang_cur"]."'
                                                order by show_order desc, date_create desc
                                                limit 0,3");
                if($num = $ttH->db->num_rows($result)) {
                    while($row = $ttH->db->fetch_row($result_redirect)){

                        $ttH->html->redirect_rel( $ttH->site->get_link ('page','',$row['friendly_link']));
                        break;
                    }
                }
                //$data['list_menu_page'] = $data['content'];



				$data['box_left'] = box_left();
				$data['box_column'] = box_column();
			}else{
				$ttH->html->redirect_rel($ttH->site->get_link ($this->modules));
			}
		}elseif(isset($ttH->conf['cur_item'])){

			$where = " and item_id='".$ttH->conf['cur_item']."' ";
			
			$result = $ttH->db->query("select * 
										from page 
										where is_show=1 
										".$where." 
										limit 0,1");
			if($row = $ttH->db->fetch_row($result)){
				$row['content'] = $ttH->func->input_editor_decode($row['content']);
				$ttH->conf['cur_group'] = $row['group_id'];
				$ttH->conf["cur_group_nav"] = $row["group_nav"];			
				$ttH->conf['cur_item'] = $row['item_id'];
				$ttH->data['cur_item'] = $row;
				//Make link lang
				$result = $ttH->db->query("select friendly_link,lang 
											from page 
											where item_id='".$ttH->conf['cur_item']."' ");
				while($row_lang = $ttH->db->fetch_row($result)){
					$ttH->data['link_lang'][$row_lang['lang']] = $ttH->site->get_link_lang ($row_lang['lang'], $this->modules, '', $row_lang['friendly_link']);
				}
				//End Make link lang
				//SEO
				$ttH->site->get_seo ($ttH->data['cur_item']);
				
				$ttH->conf['menu_action'][] = $this->modules.'-group-'.$ttH->conf['cur_group'];
				$ttH->conf['menu_action'][] = $this->modules.'-item-'.$ttH->conf['cur_item'];
				$data = array();

				$data['content'] = $this->do_detail ($ttH->data['cur_item']);
			}else{
				$ttH->html->redirect_rel($ttH->site->get_link ('home'));
			}
		}else{
			$ttH->html->redirect_rel($ttH->site->get_link ('home'));
		}
		$data['block_column'] = $ttH->site->block_left();
		$ttH->temp_act->assign('data', $data);
		$ttH->temp_act->parse("main");
		$ttH->output .=  $ttH->temp_act->text("main");
	}
	
	function do_list_group ($info = array(), $info_lang = array())
	{
		global $ttH;	

		$data = array(
			//'title' => $info_lang['title']
		);
		
		$arr_in = array(
			'link_action' => $ttH->site->get_link ('page',$info_lang['friendly_link']),
			'where' => " and find_in_set('".$info['group_id']."',group_nav)>0",
			'temp' => 'list_item',
		);
		
		switch ($info['type_show']) {
			case "list_item":
				$arr_in['temp'] = "list_item";
				$data['content'] = html_list_item($arr_in);
				break;
			case "grid_item":
				$arr_in['temp'] = "grid_item";
				$arr_in['pic_w'] = 200;
				$arr_in['pic_h'] = 200;
				$arr_in['num_row'] = 4;
				if($info['num_show'] > 0) {
					$arr_in['num_show'] = $info['num_show'];
				}
				$arr_in['short_len'] = 200;
				$data['content'] = html_list_item($arr_in);
				break;
			case "content_only":
				$data['content'] = $info_lang['content'];
				break;
			default:
				$arr_in['where'] .= " and group_id!='".$info['group_id']."'";
				$data['content'] = html_list_group($arr_in);
				
				if($data['content']) {
				} else {
					$arr_in['where'] = " and find_in_set('".$info['group_id']."',group_nav)>0";
					$arr_in['temp'] = "list_item";
					$data['content'] = html_list_item($arr_in);
				}
				
				break;
		}
		
		$ttH->temp_box->assign('data', $data);
		$ttH->temp_box->parse("box_main");
		return $ttH->temp_box->text("box_main");
	}
	
	function do_detail ($info = array())
	{
		global $ttH;	

		if($info['picture']) {
			$info['pic_w'] = 210;
			$info['pic_h'] = 210; 
			$info['picture'] = $ttH->func->get_src_mod($info["picture"], $info['pic_w'], $info['pic_h'], 1, 0, array('zoom_max' => 1));
			$ttH->temp_act->assign('data', $info);
			$ttH->temp_act->parse("item_detail.img");
		}

		$info['link_share'] = $ttH->data['link_lang'][$ttH->conf['lang_cur']];
		
		/*$string = file_get_contents('http://graph.facebook.com/'.$info['link_share'], FILE_USE_INCLUDE_PATH);
		$facebook_info = json_decode($string);
		if(!isset($facebook_info->comments)) {
			$facebook_info->comments = 0;
		}
		$info['num_comment'] = $facebook_info->comments;*/
		
		$info['date_update'] = date('d/m/Y',$info['date_update']);
		
		$info['list_other'] = list_other (" and a.item_id!='".$info['item_id']."'");

        $info['list_menu_page'] = menu_page($info);

		//print_arr($info);die;
		$ttH->temp_act->assign('data', $info);
		$ttH->temp_act->parse("item_detail");
		return $ttH->temp_act->text("item_detail");
		$data = array(
			'content' => $ttH->temp_act->text("item_detail"),
			'title' => $info['title']
		);
		
		$ttH->temp_box->assign('data', $data);
		$ttH->temp_box->parse("box_main");
		return $ttH->temp_box->text("box_main");
	}
	
  // end class
}
?>