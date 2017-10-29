<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Index extends Controller
{ 
	public function index(){
		
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
