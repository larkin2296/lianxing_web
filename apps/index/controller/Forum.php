<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Forum extends Controller
{
    public function index(){

        return $this->fetch();
        //$this->display();
    }
}