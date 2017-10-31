<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Index extends Controller
{ 
	public function index($a = 0){
		if($a == 1){
		    $this->assign('go',$a);
        }else{
            $this->assign('go',0);
        }
        return $this->fetch();
        //$this->display();		
	}
    public function index_404(){

        return $this->fetch();
        //$this->display();
    }
    public function download(){

        return $this->fetch();
        //$this->display();
    }
    public function hope(){
        return $this->fetch();
    }
}
