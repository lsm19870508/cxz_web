<?php

namespace App\Http\Controllers;

use App\Moloquent\Register;
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
        $register = new Register();
        $register->email = $request->get('email');
        $register->name = $request->get('name');
        $register->password = $request->get('password');
        $register->age = $request->get('age');
        $register->phone = $request->get('phone');
        $register->address = $request->get('address');
        $register->save();
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
