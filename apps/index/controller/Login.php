<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Login extends Controller
{
    public function index(){

        return $this->fetch();
        //$this->display();
    }
    public function register(){

        return $this->fetch();
        //$this->display();
    }
}