<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class RegController extends Controller
{
    //展示注册页
    public function index()
    {
        return view('reg/reg');
    }

    //进行注册处理
    public function register(Requests\RegisterRequest $request)
    {
        return redirect('/regsave');
    }

    //展示注册成功页面
    public function save()
    {
        return view('reg/regsave');
    }

    //展示验证成功页面
    public function confirm()
    {
        return view('reg/regcg');
    }
}
