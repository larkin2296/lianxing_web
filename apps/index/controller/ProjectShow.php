<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class ProjectShow extends Controller
{
    public function index(){

        return $this->fetch();
        //$this->display();
    }
    public function project_1(){

        return $this->fetch();
        //$this->display();
    }
    public function pro_health_app(){
        return $this->fetch();
    }
}